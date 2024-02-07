import { ResponsiveSwarmPlot } from '@nivo/swarmplot' // Importing ResponsiveSwarmPlot component from @nivo/swarmplot
import { bubbleData } from './data' // Importing bubbleData for swarm plot data

export const MyResponsiveSwarmPlot = () => (
    <ResponsiveSwarmPlot
        data={bubbleData} // Data for the swarm plot
        groups={[ 'region A', 'region B', 'region C' ]} // Groups for data categorization
        identity="id" // Identity field for data points
        value="price" // Value field for data points
        valueFormat="$.2f" // Value format
        valueScale={{ type: 'linear', min: 0, max: 500, reverse: false }} // Scale for values
        size={{ // Size configuration for points
            key: 'volume',
            values: [
                4,
                20
            ],
            sizes: [
                6,
                20
            ]
        }}
        spacing={10} // Spacing between points
        forceStrength={9} // Strength of the force simulation
        simulationIterations={260} // Number of simulation iterations
        colors={{ scheme: 'pastel1' }} // Color scheme for points
        colorBy="id" // Color data points by 'id'
        borderColor={{ // Border color configuration
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.6
                ],
                [
                    'opacity',
                    0.5
                ]
            ]
        }}
        margin={{ top: 80, right: 100, bottom: 80, left: 100 }} // Margin configuration
        enableGridY={false} // Enable/disable grid lines along Y-axis
        axisTop={{ // Configuration for top axis
            orient: 'top',
            tickSize: 10,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: -46
        }}
        axisRight={{ // Configuration for right axis
            orient: 'right',
            tickSize: 10,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: 76
        }}
        axisBottom={{ // Configuration for bottom axis
            orient: 'bottom',
            tickSize: 10,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: 46
        }}
        axisLeft={{ // Configuration for left axis
            orient: 'left',
            tickSize: 10,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Sales Figures',
            legendPosition: 'middle',
            legendOffset: -76
        }}
    />
)
