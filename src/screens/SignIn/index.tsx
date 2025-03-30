import React, { useContext, useState } from 'react';
import { 
    Image, 
    KeyboardAvoidingView, 
    StyleSheet, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    View,
    ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';
import { RootStackParamList } from '../../routes/routesTypes';
import { StackNavigationProp } from '@react-navigation/stack';

export default function SignIn(): React.JSX.Element {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const { signIn, isLoadingAuth } = useContext(AuthContext);

    const handleLogin = () => {
        signIn(email, password);
    }

    return (
        <View style={styles.background}>
            <KeyboardAvoidingView 
                style={styles.container}
                behavior='padding'
                enabled
            >
                <Image
                    style={styles.logo} 
                    source={require('../../assets/Logo.png')}
                />

                <View style={styles.inputArea}>
                    <TextInput 
                        style={styles.input}
                        placeholder='Seu e-mail'
                        placeholderTextColor='#121212'
                        value={email}
                        onChangeText={text => setEmail(text)}
                    />
                </View>

                <View style={styles.inputArea}>
                    <TextInput 
                        style={styles.input}
                        placeholder='Senha'
                        placeholderTextColor='#121212'
                        secureTextEntry={true}
                        value={password}
                        onChangeText={text => setPassword(text)}
                    />
                </View>

                <TouchableOpacity
                    style={styles.submitButton}
                    activeOpacity={0.7}
                    onPress={handleLogin}
                >
                    {isLoadingAuth ? (
                        <ActivityIndicator size={20} color={"#FFF"}/>
                    ) : (
                        <Text
                        style={styles.submitText}
                    >
                        Acessar
                    </Text>
                    )}
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.registerButton}
                    onPress={() => navigation.navigate('SignUp')}
                >
                    <Text
                        style={styles.registerText}
                    >
                        Criar uma conta
                    </Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    )
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#F0F4FF'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        marginBottom: 25
    },
    inputArea: {
        flexDirection: 'row'
    },
    input: {
        backgroundColor: '#FFF',
        width: '90%',
        fontSize: 17,
        padding: 10,
        borderRadius: 8,
        color: '#121212',
        marginBottom: 15
    },
    submitButton: {
        width: '90%',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3b3dbf',
        borderRadius: 8,
        marginTop: 10
    },
    submitText: {
        fontSize: 20,
        color: '#FFF'
    },
    registerButton: {
        marginVertical: 10
    },
    registerText: {
        color: '#171717'
    }
 });