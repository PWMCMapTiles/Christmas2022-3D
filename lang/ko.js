export default {
    pageTitle: "BlueMap - {map}",
    menu: {
        title: "메뉴",
        tooltip: "메뉴"
    },
    maps: {
        title: "월드",
        button: "월드",
        tooltip: "월드 목록"
    },
    markers: {
        title: "마커",
        button: "마커",
        tooltip: "마커 목록",
        marker: "개의 마커",
        markerSet: "마커 목록 | 마커 목록",
        searchPlaceholder: "검색...",
        followPlayerTitle: "플레이어 따라가기"
    },
    settings: {
        title: "설정",
        button: "설정"
    },
    goFullscreen: {
        button: "전체화면"
    },
    resetCamera: {
        button: "카메라 위치 초기화",
        tooltip: "카메라의 위치를 초기화합니다."
    },
    updateMap: {
        button: "맵 정보 갱신",
        tooltip: "맵 타일 캐시를 삭제합니다."
    },
    lighting: {
        title: "광원",
        dayNightSwitch: {
            tooltip: "밤/낮 전환"
        },
        sunlight: "자연광",
        ambientLight: "주변광"
    },
    resolution: {
        title: "해상도",
        high: "높음 (SSAA, x2)",
        normal: "보통 (Native, x1)",
        low: "낮음 (Upscaling, x0.5)"
    },
    freeFlightControls: {
        title: "자유 이동 조작",
        mouseSensitivity: "마우스 감도",
        invertMouseY: "마우스 Y축 반전"
    },
    renderDistance: {
        title: "렌더 거리",
        hiresLayer: "고해상도 레이어",
        lowersLayer: "저해상도 레이어"
    },
    theme: {
        title: "테마",
        default: "기본값 (시스템/브라우저)",
        dark: "Dark",
        light: "Light"
    },
    debug: {
        button: "디버그"
    },
    resetAllSettings: {
        button: "설정값 재설정"
    },
    players: {
        title: "플레이어",
        tooltip: "플레이어 목록"
    },
    compass: {
        tooltip: "나침반 / 북쪽 보기"
    },
    controls: {
        title: "시점 / 컨트롤",
        perspective: {
            button: "투시",
            tooltip: "투시로 보기"
        },
        flatView: {
            button: "평면",
            tooltip: "직각투영 / 평면으로 보기",
        },
        freeFlight: {
            button: "자유 이동",
            tooltip: "자유 이동 / 관전모드로 보기"
        }
    },
    language: {
        title: "언어",
    },
    blockTooltip: {
        block: "블록",
        position: "위치",
        chunk: "청크",
        region: {
            region: "지역",
            file: "파일"
        },
        light: {
            light: "광원",
            sun: "자연",
            block: "블럭",
        }
    },
    info: {
        title: "정보",
        button: "정보",
        content: `
<img src="assets/logo.png" style="display: block; width: 40%; margin: 3em auto; border-radius: 50%">
<p>
	<h2>마우스 조작:</h2>
	<table>
		<tr><th>이동</th><td><kbd>좌클릭</kbd> + 끌기</td></tr>
		<tr><th>확대</th><td><kbd>마우스 휠</kbd> (스크롤)</td></tr>
		<tr><th>회전 / 기울이기</th><td><kbd>우클릭</kbd> + 끌기</td></tr>
	</table>
</p>
<p>
	<h2>키보드 조작:</h2>
	<table>
		<tr><th>이동</th><td><kbd>wasd</kbd> / <kbd>화살표 키</kbd></td></tr>
		<tr><th>확대</th><td>넘버패드: <kbd>+</kbd>/<kbd>-</kbd> 또는 <kbd>Ins</kbd>/<kbd>Home</kbd></td></tr>
		<tr><th>회전 / 기울이기</th><td><kbd>왼쪽 Alt</kbd> + <kbd>wasd</kbd> / <kbd>화살표 키</kbd> 또는 <kbd>Delete</kbd>/<kbd>End</kbd>/<kbd>Page Up</kbd>/<kbd>Page Down</kbd></td></tr>
	</table>
</p>
<p>
	<h2>터치 조작:</h2>
	<table>
		<tr><th>이동</th><td>터치 + 끌기</td></tr>
		<tr><th>확대</th><td>두 손가락으로 터치 + 꼬집기</td></tr>
		<tr><th>회전 / 기울이기</th><td>두 손가락으로 터치 + 회전 / 위/아래로 끌기</td></tr>
	</table>
</p>
<br><hr>
<p class="info-footer">
	이 지도는 &#9829; <a href="https://bluecolo.red/bluemap">BlueMap</a> {version} 을 이용해 제작되었습니다
</p>
		`
    }
};
