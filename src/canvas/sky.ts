const width = window.innerWidth;
const height = window.innerHeight;

export class Star {
    x: number;
    y: number;
    size: number = Math.random() * 2;
    speed: number = Math.random() * .05;
    context: CanvasRenderingContext2D;

    reset = (): void => {
        this.size = Math.random() * 2;
        this.speed = Math.random() * .05;
        this.x = width;
        this.y = Math.random() * height;
    }

    update = (): void => {
        this.x -= this.speed;
        if (this.x < 0) {
            this.reset();
        } else {
            this.context.fillRect(this.x, this.y, this.size, this.size);
        }
    }

    constructor(x: number, y: number, context: CanvasRenderingContext2D) {
        this.x = x;
        this.y = y;
        this.context = context;
    }
}

export class ShootingStar {
    x = Math.random() * width;
    y = 0;
    len = (Math.random() * 80) + 10;
    speed = (Math.random() * 10) + 6;
    size = (Math.random()) + 0.1;
    // this is used so the shooting stars arent constant
    waitTime = new Date().getTime() + (Math.random() * 3000) + 500;
    active = false;
    context: CanvasRenderingContext2D;

    constructor(context: CanvasRenderingContext2D) {
        this.context = context;
    }

    reset = (): void => {
        this.x = Math.random() * width;
        this.y = 0;
        this.len = (Math.random() * 80) + 10;
        this.speed = (Math.random() * 10) + 6;
        this.size = (Math.random()) + 0.1;
        // this is used so the shooting stars arent constant
        this.waitTime = new Date().getTime() + (Math.random() * 3000) + 500;
        this.active = false;
    }

    update = (): void => {
        if (this.active) {
            this.x -= this.speed;
            this.y += this.speed;
            if (this.x < 0 || this.y >= height) {
                this.reset();
            } else {
                this.context.lineWidth = this.size;
                this.context.beginPath();
                this.context.moveTo(this.x, this.y);
                this.context.lineTo(this.x + this.len, this.y - this.len);
                this.context.stroke();
            }
        } else {
            if (this.waitTime < new Date().getTime()) {
                this.active = true;
            }
        }
    }
}

export const dayGradientColor = [
    {
        time: 0,
        stops: [{
            offset: 1,
            color: '#00000c'
        }
        ],
        starColor: 'white'
    },
    {
        time: 1,
        stops: [
            {
                offset: .85,
                color: '#020111'
            }, {
                offset: 1,
                color: '#191621'
            }
        ],
        starColor: 'white'
    },
    {
        time: 2,
        stops: [
            {
                offset: .6,
                color: '#020111'
            }, {
                offset: 1,
                color: '#20202c'
            }
        ]
    },
    {
        time: 3,
        stops: [
            {
                offset: .1,
                color: '#020111'
            }, {
                offset: 1,
                color: '#3a3a52'
            }
        ]
    },
    {
        time: 4,
        stops: [
            {
                offset: 0,
                color: '#20202c'
            }, {
                offset: 1,
                color: '#515175'
            }
        ]
    },
    {
        time: 5,
        stops: [
            {
                offset: 0,
                color: '#40405c'
            }, {
                offset: .8,
                color: '#6f71aa'
            }, {
                offset: 1,
                color: '#8a76ab'
            }
        ]
    },
    {
        time: 6,
        stops: [
            {
                offset: 0,
                color: '#4a4969'
            }, {
                offset: .5,
                color: '#7072ab'
            }, {
                offset: 1,
                color: '#cd82a0'
            }
        ]
    },
    {
        time: 7,
        stops: [
            {
                offset: 0,
                color: '#757abf'
            }, {
                offset: .6,
                color: '#8583be'
            }, {
                offset: 1,
                color: '#eab0d1'
            }
        ]
    },
    {
        time: 8,
        stops: [
            {
                offset: 0,
                color: '#82addb'
            }, {
                offset: 1,
                color: '#ebb2b1'
            }
        ]
    },
    {
        time: 9,
        stops: [
            {
                offset: .01,
                color: '#94c5f8'
            }, {
                offset: .7,
                color: '#a6e6ff'
            }, {
                offset: 1,
                color: '#b1b5ea'
            }
        ]
    },
    {
        time: 10,
        stops: [
            {
                offset: 0,
                color: '#b7eaff'
            }, {
                offset: 1,
                color: '#94dfff'
            }
        ]
    },
    {
        time: 11,
        stops: [
            {
                offset: 0,
                color: '#9be2fe'
            }, {
                offset: 1,
                color: '#67d1fb'
            }
        ]
    },
    {
        time: 12,
        stops: [
            {
                offset: 0,
                color: '#90dffe'
            }, {
                offset: 1,
                color: '#38a3d1'
            }
        ]
    },
    {
        time: 13,
        stops: [
            {
                offset: 0,
                color: '#57c1eb'
            }, {
                offset: 1,
                color: '#246fa8'
            }
        ]
    },
    {
        time: 14,
        stops: [
            {
                offset: 0,
                color: '#2d91c2'
            }, {
                offset: 1,
                color: '#1e528e'
            }
        ]
    },
    {
        time: 15,
        stops: [
            {
                offset: 0,
                color: '#2473ab'
            }, {
                offset: .7,
                color: '#1e528e'
            }, {
                offset: 1,
                color: '#5b7983'
            }
        ]
    },
    {
        time: 16,
        stops: [
            {
                offset: 0,
                color: '#1e528e'
            }, {
                offset: .5,
                color: '#265889'
            }, {
                offset: 1,
                color: '#9da671'
            }
        ]
    },
    {
        time: 17,
        stops: [
            {
                offset: 0,
                color: '#1e528e'
            }, {
                offset: .5,
                color: '#728a7c'
            }, {
                offset: 1,
                color: '#e9ce5d'
            }
        ]
    },
    {
        time: 18,
        stops: [
            {
                offset: 0,
                color: '#154277'
            }, {
                offset: .3,
                color: '#576e71'
            }, {
                offset: .7,
                color: '#e1c45e'
            }, {
                offset: 1,
                color: '#b26339'
            }
        ]
    },
    {
        time: 19,
        stops: [
            {
                offset: 0,
                color: '#163C52'
            }, {
                offset: .3,
                color: '#4F4F47'
            }, {
                offset: .6,
                color: '#C5752D'
            }, {
                offset: .8,
                color: '#B7490F'
            }, {
                offset: 1,
                color: '#2F1107'
            }
        ]
    },
    {
        time: 20,
        stops: [
            {
                offset: 0,
                color: '#071B26'
            }, {
                offset: .3,
                color: '#071B26'
            }, {
                offset: .8,
                color: '#8A3B12'
            }, {
                offset: 1,
                color: '#240E03'
            }
        ]
    },
    {
        time: 21,
        stops: [
            {
                offset: .3,
                color: '#010A10'
            }, {
                offset: .8,
                color: '#59230B'
            }, {
                offset: 1,
                color: '#2F1107'
            }
        ]
    },
    {
        time: 22,
        stops: [
            {
                offset: .5,
                color: '#090401'
            }, {
                offset: 1,
                color: '#4B1D06'
            }
        ]
    },
    {
        time: 23,
        stops: [
            {
                offset: .8,
                color: '#00000c'
            }, {
                offset: 1,
                color: '#150800'
            }
        ]
    }
]

function setBackground(context: CanvasRenderingContext2D) {
    const gradient = context.createLinearGradient(0, 0, 0, height);
    // get current color;
    // const hourOfDay = Math.random() * 23;
    // todo: this is test
    const minutes = new Date().getMinutes();

    const dayColor = dayGradientColor[minutes % 24];
    for (let i = 0; i < dayColor.stops.length; i++) {
        const stop = dayColor.stops[i];
        gradient.addColorStop(stop.offset, stop.color);
    }
    context.fillStyle = gradient;
    // star style
    context.fillRect(0, 0, width, height);
    context.fillStyle = '#ffffff';
    context.strokeStyle = '#ffffff';
}

export const skyBg = (context: CanvasRenderingContext2D, starCount = 0, shootingStarCount = 2): void => {

    const stars: Star[] = [];
    const shootingStars: ShootingStar[] = [];

    // init the stars
    if (starCount === 0) {
        starCount = height;
    }
    for (let i = 0; i < starCount; i++) {
        const star = new Star(Math.random() * width, Math.random() * height, context);
        stars.push(star);
    }

    // Add 2 shooting stars that just cycle.
    for (let i = 0; i < shootingStarCount; i++) {
        shootingStars.push(new ShootingStar(context));
    }

    const animate = (): void => {
        //animate background
        setBackground(context);

        let len = stars.length; 
        while (len--) {
            stars[len].update();
        }

        len = shootingStars.length;
        while (len--) {
            shootingStars[len].update();
        }

        requestAnimationFrame(animate);
    }

    animate();

}

