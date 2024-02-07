import { features } from './geoFeatures'; // Importing features data for the choropleth map
import { ResponsiveChoropleth } from '@nivo/geo'; // Importing ResponsiveChoropleth component from @nivo/geo
import { geoData } from './geoData'; // Importing geoData for map data

export const MyResponsiveChoropleth = () => (
    <ResponsiveChoropleth
        data={geoData} // Data for the choropleth map
        features={features.features} // Features data for the map
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }} // Margin configuration
        colors="PuRd" // Color scheme for the map
        domain={[ 0, 1000000 ]} // Domain for the color scale
        unknownColor="#e6c7dc" // Color for unknown values
        label="properties.name" // Label for the map features
        valueFormat=".2s" // Value format
        projectionTranslation={[ 0.5, 0.5 ]} // Translation for the map projection
        projectionRotation={[ 0, 0, 0 ]} // Rotation for the map projection
        enableGraticule={true} // Enable/disable graticule lines
        graticuleLineColor="#f7f7f7" // Color for graticule lines
        borderWidth={0.5} // Border width for map features
        borderColor={{ from: 'color', modifiers: [] }} // Border color for map features
        defs={[ // Definitions for patterns/gradients
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
            },
            {
                id: 'gradient',
                type: 'linearGradient',
                colors: [
                    {
                        offset: 0,
                        color: '#000'
                    },
                    {
                        offset: 100,
                        color: 'inherit'
                    }
                ]
            }
        ]}
        fill={[ // Fill configuration for specific map features
            {
                match: {
                    id: 'CAN' // Matching feature id
                },
                id: 'dots' // Fill pattern id
            },
            {
                match: {
                    id: 'CHN' // Matching feature id
                },
                id: 'lines' // Fill pattern id
            },
            {
                match: {
                    id: 'ATA' // Matching feature id
                },
                id: 'gradient' // Fill pattern id
            }
        ]}
        legends={[]} // Legends configuration
    />
);
