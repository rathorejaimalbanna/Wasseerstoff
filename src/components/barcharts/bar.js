import { ResponsiveBar } from '@nivo/bar' // Importing ResponsiveBar component from @nivo/bar
import { barData } from './barData' // Importing barData for chart data

export const MyResponsiveBar = () => (
    <ResponsiveBar
        data={barData} // Data for the bar chart
        keys={[
            'hot dog',
            'burger',
            'sandwich',
            'kebab',
            'fries',
            'donut'
        ]} // Keys for the data values
        indexBy="country" // Indexing data by 'country' field
        margin={{ top:-50 }} // Adjusting top margin
        groupMode="grouped" // Group mode for bars
        valueScale={{ type: 'linear' }} // Scale type for values
        indexScale={{ type: 'band', round: false }} // Scale type for indices
        valueFormat=" >-" // Value format
        colors={{ scheme: 'pastel2' }} // Color scheme for bars
        defs={[ // Definitions for patterns
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        borderWidth={1} // Border width for bars
        borderColor="#b8b7b7" // Border color for bars
        axisTop={null} // Configuration for top axis
        axisRight={null} // Configuration for right axis
        axisBottom={{ // Configuration for bottom axis
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'country',
            legendPosition: 'middle',
            legendOffset: 32,
            truncateTickAt: 0
        }}
        axisLeft={{ // Configuration for left axis
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'food',
            legendPosition: 'middle',
            legendOffset: -40,
            truncateTickAt: 0
        }}
        enableGridY={false} // Enable/disable grid lines along Y-axis
        enableLabel={false} // Enable/disable labels
        labelSkipWidth={12} // Skip width for labels
        labelSkipHeight={12} // Skip height for labels
        labelTextColor={{ // Text color for labels
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        legends={[]} // Legends configuration
        role="application" // ARIA role for accessibility
        ariaLabel="Nivo bar chart demo" // ARIA label for accessibility
        barAriaLabel={e=>e.id+": "+e.formattedValue+" in country: "+e.indexValue} // ARIA label for each bar
    />
)
