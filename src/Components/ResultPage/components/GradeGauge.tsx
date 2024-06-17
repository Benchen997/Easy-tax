import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts/core';
import {GaugeChart} from 'echarts/charts';
import {CanvasRenderer} from 'echarts/renderers';

interface GradeGaugeProps {
    userTaxableIncome: number;
    minTaxableIncome: number;
    maxTaxableIncome: number;
    avgTaxableIncome: number;
}

export default function GradeGauge({ userTaxableIncome,
                                        minTaxableIncome,
                                        maxTaxableIncome,
                                        avgTaxableIncome }:GradeGaugeProps) {

    echarts.use([GaugeChart, CanvasRenderer]);
    const chartRef = useRef<HTMLDivElement>(null);

    const getUserIncomeRange = (income: number) => {
        if (income <= minTaxableIncome) return (income / minTaxableIncome) * 0.33;
        if (income <= avgTaxableIncome) return 0.33 + ((income - minTaxableIncome) / (avgTaxableIncome - minTaxableIncome)) * 0.34;
        if (income <= maxTaxableIncome) return 0.67 + ((income - avgTaxableIncome) / (maxTaxableIncome - avgTaxableIncome)) * 0.33;
        return 1;
    };

    const userIncomeRange = getUserIncomeRange(userTaxableIncome);

    useEffect(() => {
        const myChart = echarts.init(chartRef.current!);
        window.addEventListener('resize', () => {
            myChart.resize();
        });

        const option = {
            series: [
                {
                    type: 'gauge',
                    startAngle: 180,
                    endAngle: 0,
                    center: ['50%', '75%'],
                    radius: '100%',
                    min: 0,
                    max: 1,
                    splitNumber: 8,
                    axisLine: {
                        lineStyle: {
                            width: 6,
                            color: [
                                [0.33, '#ABD0FD'], // 0 to minIncome
                                [0.67, '#3D8CEE'], // minIncome to avgIncome
                                [1, '#023D86'] // avgIncome to maxIncome
                            ]
                        }
                    },
                    pointer: {
                        icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
                        length: '12%',
                        width: 20,
                        offsetCenter: [0, '-60%'],
                        itemStyle: {
                            color: 'auto'
                        }
                    },
                    axisTick: {
                        length: 12,
                        lineStyle: {
                            color: 'auto',
                            width: 2
                        }
                    },
                    splitLine: {
                        length: 20,
                        lineStyle: {
                            color: 'auto',
                            width: 5
                        }
                    },
                    axisLabel: {
                        color: 'inherit',
                        fontSize: 20,
                        distance: -50,
                        rotate: 'tangential',
                        formatter: function (value: number) {
                            if (value === 0.875) { // Middle of 0 to 0.33
                                return 'Class 3';
                            } else if (value === 0.5) { // Middle of 0.33 to 0.67
                                return 'Class 2';
                            } else if (value === 0.125) { // Middle of 0.67 to 1
                                return 'Class 1';
                            }
                            return '';
                        }
                    },
                    title: {
                        offsetCenter: [0, '-10%'],
                        fontSize: 20
                    },
                    detail: {
                        fontSize: 30,
                        offsetCenter: [0, '-35%'],
                        valueAnimation: true,
                        formatter: function () {
                            return `$ ${userTaxableIncome.toFixed(2)}`;
                        },
                        color: 'inherit'
                    },
                    data: [
                        {
                            value: userIncomeRange,
                            name: 'Estimated Taxable Income',
                            fontSize: 20,
                            fontColor: '#1976D2',
                            fontWeight: 'bold'
                        }
                    ]
                }
            ]
        };

        myChart.setOption(option);

        // Clean up the chart on component unmount
        return () => {
            myChart.dispose();
        };
    }, [userIncomeRange, userTaxableIncome]);

    return (
        <div className="flex w-full h-96 justify-center items-center z-10" ref={chartRef}></div>
    );
}




