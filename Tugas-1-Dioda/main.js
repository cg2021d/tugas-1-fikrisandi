function main() {
    var canvas = document.getElementById('myCanvas');
    var gl = canvas.getContext('webgl');

    const object_dioda = {
        line_top_color: [0.340, 0.330, 0.330],
        line_top_a: [-0.62, 0.65],
        line_top_b: [-0.58, 0.65],
        line_top_c: [-0.52, 0.1],
        line_top_d: [-0.56, 0.1],

        Body_dioda_top_color: [0.690, 0.656, 0.656],
        Body_dioda_color: [-0.0100, -0.00133, 0.00],
        body_a: [-0.66, 0.0],
        body_b: [-0.64, 0.1],
        body_c: [-0.44, 0.1],
        body_d: [-0.42, 0.0],
        body_e: [-0.42, -0.35],
        body_f: [-0.44, -0.45],
        body_g: [-0.64, -0.45],
        body_h: [-0.66, -0.35],

        line_bot_a: [-0.56, -0.45],
        line_bot_b: [-0.52, -0.45],
        line_bot_c: [-0.52, -1],
        line_bot_d: [-0.56, -1],
    };


    const object_dioda_2 = {
        line_left_color: [0.340, 0.330, 0.330],
        line_left_a: [-0.15, -0.15],
        line_left_b: [-0.15, -0.22],
        line_left_c: [0.25, -0.15],
        line_left_d: [0.25, -0.22],

        Body_dioda_2_top_color: [0.690, 0.656, 0.656],
        Body_dioda_2_color: [-0.0100, -0.00133, 0.00],
        body_2_a: [0.28, 0.08],
        body_2_b: [0.25, 0.0],
        body_2_c: [0.25, -0.4],
        body_2_d: [0.28, -0.48],
        body_2_e: [0.58, -0.48],
        body_2_f: [0.62, -0.4],
        body_2_g: [0.62, 0.0],
        body_2_h: [0.58, 0.08],

        line_right_a: [0.62, -0.15],
        line_right_b: [0.62, -0.22],
        line_right_c: [1, -0.15],
        line_right_d: [1, -0.22]
    };

    const vertices = [
        ...object_dioda.line_top_a, ...object_dioda.line_top_color,
        ...object_dioda.line_top_b, ...object_dioda.line_top_color, 
        ...object_dioda.line_top_c, ...object_dioda.line_top_color, 
        ...object_dioda.line_top_a, ...object_dioda.line_top_color, 
        ...object_dioda.line_top_c, ...object_dioda.line_top_color,
        ...object_dioda.line_top_d, ...object_dioda.line_top_color, // 30

        ...object_dioda.body_a, ...object_dioda.Body_dioda_top_color,
        ...object_dioda.body_b, ...object_dioda.Body_dioda_top_color,
        ...object_dioda.body_c, ...object_dioda.Body_dioda_top_color,
        ...object_dioda.body_d, ...object_dioda.Body_dioda_top_color,
        ...object_dioda.body_c, ...object_dioda.Body_dioda_top_color,
        ...object_dioda.body_a, ...object_dioda.Body_dioda_top_color, // 60

        ...object_dioda.body_a, ...object_dioda.Body_dioda_color,
        ...object_dioda.body_d, ...object_dioda.Body_dioda_color,
        ...object_dioda.body_e, ...object_dioda.Body_dioda_color,
        ...object_dioda.body_a, ...object_dioda.Body_dioda_color,
        ...object_dioda.body_h, ...object_dioda.Body_dioda_color,
        ...object_dioda.body_e, ...object_dioda.Body_dioda_color, // 90

        ...object_dioda.body_h, ...object_dioda.Body_dioda_color,
        ...object_dioda.body_g, ...object_dioda.Body_dioda_color,
        ...object_dioda.body_f, ...object_dioda.Body_dioda_color,
        ...object_dioda.body_e, ...object_dioda.Body_dioda_color,
        ...object_dioda.body_f, ...object_dioda.Body_dioda_color,
        ...object_dioda.body_h, ...object_dioda.Body_dioda_color, // 120

        ...object_dioda.line_bot_a, ...object_dioda.line_top_color,
        ...object_dioda.line_bot_b, ...object_dioda.line_top_color,
        ...object_dioda.line_bot_c, ...object_dioda.line_top_color,
        ...object_dioda.line_bot_a, ...object_dioda.line_top_color,
        ...object_dioda.line_bot_c, ...object_dioda.line_top_color,
        ...object_dioda.line_bot_d, ...object_dioda.line_top_color, // 150

        // gambar kanan
        ...object_dioda_2.line_left_a, ...object_dioda_2.line_left_color,
        ...object_dioda_2.line_left_b, ...object_dioda_2.line_left_color,
        ...object_dioda_2.line_left_c, ...object_dioda_2.line_left_color,
        ...object_dioda_2.line_left_c, ...object_dioda_2.line_left_color,
        ...object_dioda_2.line_left_b, ...object_dioda_2.line_left_color,
        ...object_dioda_2.line_left_d, ...object_dioda_2.line_left_color, // 180

        ...object_dioda_2.body_2_a, ...object_dioda_2.Body_dioda_2_color,
        ...object_dioda_2.body_2_b, ...object_dioda_2.Body_dioda_2_color,
        ...object_dioda_2.body_2_d, ...object_dioda_2.Body_dioda_2_color,
        ...object_dioda_2.body_2_d, ...object_dioda_2.Body_dioda_2_color,
        ...object_dioda_2.body_2_c, ...object_dioda_2.Body_dioda_2_color,
        ...object_dioda_2.body_2_b, ...object_dioda_2.Body_dioda_2_color, // 210

        ...object_dioda_2.body_2_a, ...object_dioda_2.Body_dioda_2_color,
        ...object_dioda_2.body_2_d, ...object_dioda_2.Body_dioda_2_color,
        ...object_dioda_2.body_2_e, ...object_dioda_2.Body_dioda_2_color,
        ...object_dioda_2.body_2_e, ...object_dioda_2.Body_dioda_2_color,
        ...object_dioda_2.body_2_h, ...object_dioda_2.Body_dioda_2_color,
        ...object_dioda_2.body_2_a, ...object_dioda_2.Body_dioda_2_color, // 240

        ...object_dioda_2.body_2_e, ...object_dioda_2.Body_dioda_2_top_color,
        ...object_dioda_2.body_2_f, ...object_dioda_2.Body_dioda_2_top_color,
        ...object_dioda_2.body_2_h, ...object_dioda_2.Body_dioda_2_top_color,
        ...object_dioda_2.body_2_g, ...object_dioda_2.Body_dioda_2_top_color,
        ...object_dioda_2.body_2_h, ...object_dioda_2.Body_dioda_2_top_color,
        ...object_dioda_2.body_2_f, ...object_dioda_2.Body_dioda_2_top_color, // 270

        ...object_dioda_2.line_right_a, ...object_dioda_2.line_left_color,
        ...object_dioda_2.line_right_b, ...object_dioda_2.line_left_color,
        ...object_dioda_2.line_right_c, ...object_dioda_2.line_left_color,
        ...object_dioda_2.line_right_c, ...object_dioda_2.line_left_color,
        ...object_dioda_2.line_right_b, ...object_dioda_2.line_left_color,
        ...object_dioda_2.line_right_d, ...object_dioda_2.line_left_color, // 300

    ];

    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);


    var vertexShaderSource = `
        attribute vec2 aPosition;
        attribute vec3 aColor;
        varying vec3 vColor;
        uniform float uChange;
        void main() {
            gl_Position = vec4(aPosition.x, aPosition.y, 1.0, 1.0);
            vColor = aColor;
        }
    `;

    var fragmentShaderSource = `
        precision mediump float;
        varying vec3 vColor;
        void main() {
            gl_FragColor = vec4(vColor, 1.0);
        }
    `;

    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderSource);


    gl.compileShader(vertexShader);
    gl.compileShader(fragmentShader);


    var shaderProgram = gl.createProgram();


    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);


    gl.linkProgram(shaderProgram);


    gl.useProgram(shaderProgram);


    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(
        aPosition,
        2,
        gl.FLOAT,
        false,
        5 * Float32Array.BYTES_PER_ELEMENT,
        0
    );
    gl.enableVertexAttribArray(aPosition);
    var aColor = gl.getAttribLocation(shaderProgram, "aColor");
    gl.vertexAttribPointer(
        aColor,
        3,
        gl.FLOAT,
        false,
        5 * Float32Array.BYTES_PER_ELEMENT,
        2 * Float32Array.BYTES_PER_ELEMENT
    );
    gl.enableVertexAttribArray(aColor);

    var freeze = false;
    // Interactive graphics with mouse
    function onMouseClick(event) {
        freeze = !freeze;
    }
    document.addEventListener("click", onMouseClick);
    // Interactive graphics with keyboard
    function onKeydown(event) {
        if (event.keyCode == 32) freeze = true;
    }

    function onKeyup(event) {
        if (event.keyCode == 32) freeze = false;
    }
    document.addEventListener("keydown", onKeydown);
    document.addEventListener("keyup", onKeyup);

    var speed = 0.0195;
    var change = 0;
    var uChange = gl.getUniformLocation(shaderProgram, "uChange");

    function moveVertices() {

        if (vertices[241] < -1.0 || vertices[231] > 1.0) {
            speed = speed * -1;
        }

        for (let i = 151; i < vertices.length; i += 5) {
            vertices[i] = vertices[i] + speed;
        }
    }


    function render() {
        moveVertices();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
        change = change + speed;
        gl.uniform1f(uChange, change);

        gl.clearColor(0.760, 0.633, 0.380, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        var primitive = gl.TRIANGLES;
        var offset = 0;
        var nVertex = 60;
        gl.drawArrays(primitive, offset, nVertex);
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}