import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, FlatList, Alert } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import Header from "../../components/Header";
import Form from "../../components/Form";
import Task from "../../components/Task";
import clipBoard from '../../../assets/clipboard.png';

type task = {
    id: string;
    name: string;
    checked: boolean;
}

export default function Home() {
    const emptyListTitle = 'Você ainda não tem tarefas cadastradas'
    const emptyListDescription = 'Crie tarefas e organize seus itens a fazer'

    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [tasks, setTasks] = useState<task[]>([])

    const addTask = (name: string) => {
        if (name.trim() === '') {
            return Alert.alert("Tarefa sem nome", "Dê um nome para sua tarefa antes de incluir!");
        }

        if (tasks.map(task => task.name.toLowerCase()).includes(name.toLowerCase())) {
            return Alert.alert("Tarefa existente", "Já existe uma tarefa com esse nome!")
        }

        const task: any = {
            id: id + 1,
            name: name,
            checked: false,
        }

        setTasks(prevState => [...prevState, task]);
        setId(id + 1)
        setName('');

    }

    const deleteTask = (item: task) => {
        setTasks(prevState => prevState.filter(task => task.id !== item.id));
    }

    const markTask = (item: task) => {
        if (!item.checked) {
            setTasks(prevState => prevState.map(task => (task.id === item.id ? { id: item.id, name: item.name, checked: true } : task)))
        } else {
            setTasks(prevState => prevState.map(task => (task.id === item.id ? { id: item.id, name: item.name, checked: false } : task)))
        }
    }

    return (
        <View style={styles.container}>
            <Header />
            <Form
                value={name}
                onChangeText={setName}
                onSubmit={() => addTask(name)}
            />
            <View style={styles.descriptionView}>
                <View style={styles.criadasView}>
                    <Text style={styles.criadasText}>Criadas</Text>
                    <Text style={styles.backgroundQtd}>{tasks.length}</Text>
                </View>
                <View style={styles.concluidasView}>
                    <Text style={styles.concluidasText}>Concluídas</Text>
                    <Text style={styles.backgroundQtd}>{tasks.filter(task => task.checked).length}</Text>
                </View>
            </View>
            <FlatList
                data={tasks}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Task
                        key={item.id}
                        checked={item.checked}
                        name={item.name}
                        onFinished={() => markTask(item)}
                        onRemove={() => deleteTask(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <View style={styles.listEmptyView}>
                        <Image style={styles.listEmptyImage} source={clipBoard} />
                        <Text style={styles.listEmptyTitle}>
                            {emptyListTitle}
                        </Text>
                        <Text style={styles.listEmptyDescription}>
                            {emptyListDescription}
                        </Text>
                    </View>
                )}
            />

        </View>

    )
}