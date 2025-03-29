import React, { useContext, useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { AuthContext } from '../../contexts/auth';

export default function SignUp(): React.JSX.Element {
    const { signUp, isLoadingAuth } = useContext(AuthContext);
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSignup = () => {
        signUp(name, email, password);
    }

    return (
        <View style={styles.background}>
            <KeyboardAvoidingView 
                style={styles.container}
                behavior='padding'
                enabled
            >
                
                <View style={styles.inputArea}>
                    <TextInput 
                        style={styles.input}
                        placeholder='Seu nome'
                        placeholderTextColor='#121212'
                        value={name}
                        onChangeText={text => setName(text)}
                    />
                </View>

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
                        value={password}
                        onChangeText={text => setPassword(text)}
                        secureTextEntry={true}
                    />
                </View>

                <TouchableOpacity
                    style={styles.submitButton}
                    activeOpacity={0.7}
                    onPress={() => handleSignup()}
                    disabled={isLoadingAuth}
                >
                    {
                        isLoadingAuth ? (
                            <ActivityIndicator size={20} color="#FFF"/>
                        ) : (
                            <Text
                            style={styles.submitText}
                        >
                            Cadastrar
                        </Text>
                        )
                    }
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
 });