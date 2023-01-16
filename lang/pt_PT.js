export default {
    pageTitle: "BlueMap - {map}",
    menu: {
        title: "Menu",
        tooltip: "Menu"
    },
    maps: {
        title: "Mapas",
        button: "Mapas",
        tooltip: "Lista de mapas"
    },
    markers: {
        title: "Marcadores",
        button: "Marcadores",
        tooltip: "Lista de marcadores",
        marker: "marcador | marcadores",
        markerSet: "colocar marcador | colocar marcadores",
        searchPlaceholder: "Procurar..."
    },
    settings: {
        title: "Definições",
        button: "Definições"
    },
    goFullscreen: {
        button: "Tela Cheia"
    },
    resetCamera: {
        button: "Redefinir Câmara",
        tooltip: "Redefinir Câmara e Posição"
    },
    updateMap: {
        button: "Atualizar mapa",
        tooltip: "Limpar cache de tiles"
    },
    lighting: {
        title: "Luminosidade",
        dayNightSwitch: {
            tooltip: "Dia/Noite"
        },
        sunlight: "Luz do dia",
        ambientLight: "Luz ambiental"
    },
    resolution: {
        title: "Resolução",
        high: "Alta (SSAA, x2)",
        normal: "Normal (Nativo, x1)",
        low: "Baixa (Upscaling, x0.5)"
    },
    freeFlightControls: {
        title: "Controlos de voo-livre",
        mouseSensitivity: "Sensibilidade do rato",
        invertMouseY: "Inverter rato Y"
    },
    renderDistance: {
        title: "Distância de renderização",
        hiresLayer: "Camada de alta resolução",
        lowersLayer: "Camada de baixa resolução"
    },
    theme: {
        title: "Tema",
        default: "Padrão (Sistema/Browser)",
        dark: "Escuro",
        light: "Claro"
    },
    debug: {
        button: "Debug"
    },
    resetAllSettings: {
        button: "Redefinir todas as configurações"
    },
    players: {
        title: "Jogadores",
        tooltip: "Lista de jogadores"
    },
    compass: {
        tooltip: "Compasso / Apontar para norte"
    },
    controls: {
        title: "Visão / Controlos",
        perspective: {
            button: "Perspetiva",
            tooltip: "Visão de perspetiva"
        },
        flatView: {
            button: "Plano",
            tooltip: "Visão plana",
        },
        freeFlight: {
            button: "Voo-livre",
            tooltip: "Voo-livre / Modo espectador"
        }
    },
    language: {
        title: "Língua",
    },
    blockTooltip: {
        block: "Bloco",
        position: "Posição",
        chunk: "Chunk",
        region: {
            region: "Região",
            file: "Ficheiro"
        },
        light: {
            light: "Luz",
            sun: "Sol",
            block: "Bloco",
        }
    },
    info: {
        title: "Informação",
        button: "Informação",
        content: `
<img src="assets/logo.png" style="display: block; width: 40%; margin: 3em auto; border-radius: 50%">
<p>
	<h2>Controlos do rato:</h2>
	<table>
		<tr><th>mover</th><td><kbd>click-esquerdo</kbd> + arrastar</td></tr>
		<tr><th>zoom</th><td><kbd>botão do meio</kbd> (scroll)</td></tr>
		<tr><th>rodar / inclinar</th><td><kbd>click-direito</kbd> + arrastar</td></tr>
	</table>
</p>
<p>
	<h2>Controlos do teclado:</h2>
	<table>
		<tr><th>mover</th><td><kbd>wasd</kbd> / <kbd>setas</kbd></td></tr>
		<tr><th>zoom</th><td>Numpad: <kbd>+</kbd>/<kbd>-</kbd> ou <kbd>Ins</kbd>/<kbd>Home</kbd></td></tr>
		<tr><th>rodar / inclinar</th><td><kbd>Alt-esquerdo</kbd> + <kbd>wasd</kbd> / <kbd>setas</kbd> ou <kbd>Delete</kbd>/<kbd>End</kbd>/<kbd>Page Up</kbd>/<kbd>Page Down</kbd></td></tr>
	</table>
</p>
<p>
	<h2>Controlos táteis:</h2>
	<table>
		<tr><th>mover</th><td>tocar + arrastar</td></tr>
		<tr><th>zoom</th><td>tocar com 2 dedos + afastar / aproximar os dedos</td></tr>
		<tr><th>rodar / inclinar</th><td>tocar com 2 dedos + rodar / mover para cima / baixo</td></tr>
	</table>
</p>
<br><hr>
<p class="info-footer">
	Este mapa foi gerado com &#9829; usando o <a href="https://bluecolo.red/bluemap">BlueMap</a> {version}
</p>
		`
    }
}
