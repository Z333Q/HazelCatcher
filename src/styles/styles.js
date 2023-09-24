import { StyleSheet, Dimensions } from 'react-native';

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        width: winWidth * 0.8,
        margin: 10,
        padding: 20,
    },
    main: {
        minHeight: winHeight,
        padding: 40,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    .title {
        line-height: 1.15;
        font-size: 3rem;
        text-align: center;
        margin: 50px;
    }
    
    .title a {
        color: #0070f3;
        text-decoration: none;
    }
    
    .grid {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    
    .card {
        margin: 0.5rem;
        padding: 0.7rem;
        text-align: center;
        color: #0070f3;
        background-color: #fafafa;
        text-decoration: none;
        border: 1px solid #0070f3;
        border-radius: 10px;
        transition: color 0.15s ease, border-color 0.15s ease;
        width: 100%;
    }
    
    .card:hover,
    .card:focus,
    .card:active {
        cursor: pointer;
        background-color: #f1f1f1;
    }
    
    .footer {
        display: flex;
        flex: 1;
        padding: 2rem 0;
        border-top: 1px solid #eaeaea;
        justify-content: center;
        align-items: center;
        margin-top: 10rem;
    }
    
    .footer a {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-grow: 1;
    }
    
    .logo {
        height: 1.5rem;
        margin-left: 0.5rem;
    }
    
    @media (max-width: 1200px) {
        .container {
            width: 100%;
        }
    }
    
    .flex-container {
        display: flex;
        flex-flow: row wrap;
    }
    
    .flex-container > div {
        width: 100px;
        margin: 10px;
        text-align: center;
        line-height: 75px;
        font-size: 30px;
    }
    
    #console {
        width: 100%;
        height: 100%;
        overflow: auto;
        word-wrap: break-word;
        font-size: 16px;
        font-family: monospace;
    }    
    squirrel: {
        position: 'absolute',
        bottom: 0.02 * winHeight,
        fontSize: 0.05 * winWidth,
        left: winWidth / 2 - 0.05 * winWidth,
    },
    element: {
        position: 'absolute',
        fontSize: 0.04 * winWidth,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    score: {
        position: 'absolute',
        top: 10,
        left: 10,
        fontSize: 0.04 * winWidth, // 4% of window width
        color: '#333',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        padding: 5,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    startBtn: {
        position: 'absolute',
        bottom: 0.03 * winHeight, // 3% of window height
        padding: 10,
        backgroundColor: '#4caf50',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 0.03 * winWidth, // 3% of window width
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    startBtnActive: { // This is for the active state
        backgroundColor: '#388e3c', // Darker shade for active state
    },
    gameOverText: {
        fontSize: 0.06 * winWidth, // 6% of window width
        color: '#f00',
        fontWeight: 'bold',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        padding: 10,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
});

export default styles;
