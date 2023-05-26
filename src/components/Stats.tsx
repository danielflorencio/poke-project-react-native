import { Divider } from "native-base";
import { View, StyleSheet, Text } from "react-native";
import { Progress } from 'native-base';

type PokemonStatsProps = {
    hp?: number,
    att?: number, 
    def?: number, 
    satk?: number,
    sdef?: number, 
    spd?: number
}

export default function Stats({hp, att, def, satk, sdef, spd}: PokemonStatsProps){
    return(
        <View style={styles.mainStatsContainer}>
            <Text style={styles.baseStatsTitle}>Base Stats</Text>
            <View style={styles.innerSectionsSeparator}>
                <View style={styles.labelsContainer}>
                    <Text style={styles.statsTitles}>HP</Text>
                    <Text style={styles.statsTitles}>ATK</Text>
                    <Text style={styles.statsTitles}>DEF</Text>
                    <Text style={styles.statsTitles}>SATK</Text>
                    <Text style={styles.statsTitles}>SDEF</Text>
                    <Text style={styles.statsTitles}>SPD</Text>
                </View>
                <Divider orientation={'vertical'}/>
                <View style={styles.progressBarsContainer}>
                    <View style={styles.textAndBarCouple}>
                        <Text style={styles.statusText}>{hp}</Text>
                        <Progress size="xs" mb={4} value={hp} style={styles.progressBar}/>
                    </View>
                    <View style={styles.textAndBarCouple}>
                        <Text style={styles.statusText}>{att && att}</Text>
                        <Progress size="xs" mb={4} value={att} style={styles.progressBar}/>
                    </View>
                    <View style={styles.textAndBarCouple}>
                        <Text style={styles.statusText}>{def}</Text>
                        <Progress size="xs" mb={4} value={def} style={styles.progressBar}/>
                    </View>
                    <View style={styles.textAndBarCouple}>
                        <Text style={styles.statusText}>{satk}</Text>
                        <Progress size="xs" mb={4} value={satk} style={styles.progressBar}/>
                    </View>
                    <View style={styles.textAndBarCouple}>
                        <Text style={styles.statusText}>{sdef}</Text>
                        <Progress size="xs" mb={4} value={sdef} style={styles.progressBar}/>
                    </View>
                    <View style={styles.textAndBarCouple}>
                        <Text style={styles.statusText}>{spd}</Text>
                        <Progress size="xs" mb={4} value={spd} style={styles.progressBar}/>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainStatsContainer: {
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
    },
    baseStatsTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 12
    },
    innerSectionsSeparator: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        width: '100%',
    },
    labelsContainer: {
        
    },
    statsTitles: {
        fontWeight: 'bold',
    },
    labelsAndStatsDivider: {

    },
    progressBarsContainer: {
        width: '80%',
    },
    textAndBarCouple: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        flexWrap: 'wrap',
        gap: 6
    },
    statusText: {

    },
    progressBar: {
        width: '80%'
    }
})