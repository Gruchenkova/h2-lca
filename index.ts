import './style.scss';
import { Chart, registerables } from 'chart.js';
import * as echarts from 'echarts';

Chart.register(...registerables);

let queryObj: { sheet: string, cells: { cell: string, value: string | boolean }, result: { sheet: 'Production + T&D', cells: string } };

function setValue(id: string, value: any) {
    const newId = id.replace(/[^a-z]+/g, '');
    const el = document.getElementById(newId) as HTMLInputElement;
    if (el) {
        el.value = value;
    }
}

async function getValue() {
    const data = await fetch('http://localhost:8081/start', {
        mode: 'no-cors',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    });
    // eslint-disable-next-line no-restricted-syntax,guard-for-in
    for (const key in data) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        setValue(key, data[key]);
    }
}


async function changeValue(query: { sheet: string, cells: { cell: string, value: string | boolean }, result: { sheet: 'Production + T&D', cells: string } }) {
    const res = await fetch('http://localhost:8081/calc', {
        mode: 'no-cors',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(query)
    });

    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    for (const key in res) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        setValue(key, res[key]);
    }
}

//NGP1
const SP_E33 = document.getElementById('SP_E33') as HTMLInputElement;
const SP_E34 = document.getElementById('SP_E34') as HTMLInputElement;
const SP_E35 = document.getElementById('SP_E35') as HTMLInputElement;
const SP_E36 = document.getElementById('SP_E36') as HTMLInputElement;
const SP_E37 = document.getElementById('SP_E37') as HTMLInputElement;
const SP_E38 = document.getElementById('SP_E38') as HTMLInputElement;

//NGP2
const SP_F33 = document.getElementById('SP_F33') as HTMLInputElement;
const SP_F34 = document.getElementById('SP_F34') as HTMLInputElement;
const SP_F35 = document.getElementById('SP_F35') as HTMLInputElement;
const SP_F36 = document.getElementById('SP_F36') as HTMLInputElement;
const SP_F37 = document.getElementById('SP_F37') as HTMLInputElement;
const SP_F38 = document.getElementById('SP_F38') as HTMLInputElement;

//NGP3
const SP_G33 = document.getElementById('SP_G33') as HTMLInputElement;
const SP_G34 = document.getElementById('SP_G34') as HTMLInputElement;
const SP_G35 = document.getElementById('SP_G35') as HTMLInputElement;
const SP_G36 = document.getElementById('SP_G36') as HTMLInputElement;
const SP_G37 = document.getElementById('SP_G37') as HTMLInputElement;
const SP_G38 = document.getElementById('SP_G38') as HTMLInputElement;

//NGP4
const SP_H33 = document.getElementById('SP_H33') as HTMLInputElement;
const SP_H34 = document.getElementById('SP_H34') as HTMLInputElement;
const SP_H35 = document.getElementById('SP_H35') as HTMLInputElement;
const SP_H36 = document.getElementById('SP_H36') as HTMLInputElement;
const SP_H37 = document.getElementById('SP_H37') as HTMLInputElement;
const SP_H38 = document.getElementById('SP_H38') as HTMLInputElement;

//LTEP1
const SP_J33 = document.getElementById('SP_J33') as HTMLInputElement;
const SP_J34 = document.getElementById('SP_J34') as HTMLInputElement;
const SP_J35 = document.getElementById('SP_J35') as HTMLInputElement;
const SP_J36 = document.getElementById('SP_J36') as HTMLInputElement;
const SP_J37 = document.getElementById('SP_J37') as HTMLInputElement;

//LTEP2
const SP_K33 = document.getElementById('SP_K33') as HTMLInputElement;
const SP_K34 = document.getElementById('SP_K34') as HTMLInputElement;
const SP_K35 = document.getElementById('SP_K35') as HTMLInputElement;
const SP_K36 = document.getElementById('SP_K36') as HTMLInputElement;
const SP_K37 = document.getElementById('SP_K37') as HTMLInputElement;

//LTEP3
const SP_L33 = document.getElementById('SP_L33') as HTMLInputElement;
const SP_L34 = document.getElementById('SP_L34') as HTMLInputElement;
const SP_L35 = document.getElementById('SP_L35') as HTMLInputElement;
const SP_L36 = document.getElementById('SP_L36') as HTMLInputElement;
const SP_L37 = document.getElementById('SP_L37') as HTMLInputElement;

//LTEP4
const SP_M33 = document.getElementById('SP_M33') as HTMLInputElement;
const SP_M34 = document.getElementById('SP_M34') as HTMLInputElement;
const SP_M35 = document.getElementById('SP_M35') as HTMLInputElement;
const SP_M36 = document.getElementById('SP_M36') as HTMLInputElement;
const SP_M37 = document.getElementById('SP_M37') as HTMLInputElement;

//HTEP1
const SP_O33 = document.getElementById('SP_O33') as HTMLInputElement;
const SP_O34 = document.getElementById('SP_O34') as HTMLInputElement;
const SP_O35 = document.getElementById('SP_O35') as HTMLInputElement;
const SP_O36 = document.getElementById('SP_O36') as HTMLInputElement;
const SP_O37 = document.getElementById('SP_O37') as HTMLInputElement;

//HTEP2
const SP_P33 = document.getElementById('SP_P33') as HTMLInputElement;
const SP_P34 = document.getElementById('SP_P34') as HTMLInputElement;
const SP_P35 = document.getElementById('SP_P35') as HTMLInputElement;
const SP_P36 = document.getElementById('SP_P36') as HTMLInputElement;
const SP_P37 = document.getElementById('SP_P37') as HTMLInputElement;

//HTEP3
const SP_Q33 = document.getElementById('SP_Q33') as HTMLInputElement;
const SP_Q34 = document.getElementById('SP_Q34') as HTMLInputElement;
const SP_Q35 = document.getElementById('SP_Q35') as HTMLInputElement;
const SP_Q36 = document.getElementById('SP_Q36') as HTMLInputElement;
const SP_Q37 = document.getElementById('SP_Q37') as HTMLInputElement;

//HTEP4
const SP_R33 = document.getElementById('SP_R33') as HTMLInputElement;
const SP_R34 = document.getElementById('SP_R34') as HTMLInputElement;
const SP_R35 = document.getElementById('SP_R35') as HTMLInputElement;
const SP_R36 = document.getElementById('SP_R36') as HTMLInputElement;
const SP_R37 = document.getElementById('SP_R37') as HTMLInputElement;

//TRANSPORT1
const TD_F3 = document.getElementById('TD_F3') as HTMLInputElement;
const TD_F4 = document.getElementById('TD_F4') as HTMLInputElement;
const TD_F5 = document.getElementById('TD_F5') as HTMLInputElement;
const TD_F8 = document.getElementById('TD_F8') as HTMLInputElement;
const TD_F10 = document.getElementById('TD_F10') as HTMLInputElement;
const TD_F11 = document.getElementById('TD_F11') as HTMLInputElement;
const TD_F12 = document.getElementById('TD_F12') as HTMLInputElement;

//TRANSPORT2
const TD_AA3 = document.getElementById('TD_AA3') as HTMLInputElement;
const TD_AA4 = document.getElementById('TD_AA4') as HTMLInputElement;
const TD_AA5 = document.getElementById('TD_AA5') as HTMLInputElement;
const TD_AA10 = document.getElementById('TD_AA10') as HTMLInputElement;
const TD_AA11 = document.getElementById('TD_AA11') as HTMLInputElement;
const TD_AA12 = document.getElementById('TD_AA12') as HTMLInputElement;

//TRANSPORT3
const TD_AV3 = document.getElementById('TD_AV3') as HTMLInputElement;
const TD_AV4 = document.getElementById('TD_AV4') as HTMLInputElement;
const TD_AV5 = document.getElementById('TD_AV5') as HTMLInputElement;
const TD_AV9 = document.getElementById('TD_AV9') as HTMLInputElement;
const TD_AV10 = document.getElementById('TD_AV10') as HTMLInputElement;
const TD_AV11 = document.getElementById('TD_AV11') as HTMLInputElement;
const TD_AV12 = document.getElementById('TD_AV12') as HTMLInputElement;

//TRANSPORT4
const TD_BQ3 = document.getElementById('TD_BQ3') as HTMLInputElement;
const TD_BQ4 = document.getElementById('TD_BQ4') as HTMLInputElement;
const TD_BQ5 = document.getElementById('TD_BQ5') as HTMLInputElement;
const TD_BQ8 = document.getElementById('TD_BQ8') as HTMLInputElement;
const TD_BQ10 = document.getElementById('TD_BQ10') as HTMLInputElement;
const TD_BQ11 = document.getElementById('TD_BQ11') as HTMLInputElement;
const TD_BQ12 = document.getElementById('TD_BQ12') as HTMLInputElement;

//results

const P = document.getElementById('P') as HTMLInputElement;
const Q = document.getElementById('Q') as HTMLInputElement;
const R = document.getElementById('R') as HTMLInputElement;
const S = document.getElementById('S') as HTMLInputElement;
const T = document.getElementById('T') as HTMLInputElement;
const V = document.getElementById('V') as HTMLInputElement;
const W = document.getElementById('W') as HTMLInputElement;
const X = document.getElementById('X') as HTMLInputElement;
const Y = document.getElementById('Y') as HTMLInputElement;
const Z = document.getElementById('Z') as HTMLInputElement;
const AA = document.getElementById('AA') as HTMLInputElement;
const AB = document.getElementById('AB') as HTMLInputElement;
const AC = document.getElementById('AC') as HTMLInputElement;

const wr_P = document.getElementById('wr_P') as HTMLInputElement;
const wr_Q = document.getElementById('wr_Q') as HTMLInputElement;
const wr_R = document.getElementById('wr_R') as HTMLInputElement;
const wr_S = document.getElementById('wr_S') as HTMLInputElement;
const wr_T = document.getElementById('wr_T') as HTMLInputElement;

const wr_TD_F8 = document.getElementById('wr_TD_F8') as HTMLElement;
const wr_TD_AV9 = document.getElementById('wr_TD_AV9') as HTMLElement;
const wr_TD_BQ8 = document.getElementById('wr_TD_BQ8') as HTMLElement;

//chart options

const NGR_Chart = {
    title: {
        text: ''
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {},
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '',
            type: 'bar',
            stack: 'Total',
            silent: true,
            itemStyle: {
                borderColor: 'transparent',
                color: 'transparent'
            },
            emphasis: {
                itemStyle: {
                    borderColor: 'transparent',
                    color: 'transparent'
                }
            },
            data: [0,
                Number(P.value),
                Number(P.value) + Number(Q.value),
                Number(P.value) + Number(Q.value) + Number(R.value),
                Number(P.value) + Number(Q.value) + Number(R.value) + Number(S.value),
                Number(P.value) + Number(Q.value) + Number(R.value) +
                Number(S.value) + Number(T.value),
                Number(P.value) + Number(Q.value) + Number(R.value) +
                Number(S.value) + Number(T.value),
                Number(P.value) + Number(Q.value) + Number(R.value) +
                Number(S.value) + Number(T.value) + Number(V.value),
                Number(P.value) + Number(Q.value) + Number(R.value) +
                Number(S.value) + Number(T.value) + Number(V.value) + Number(W.value),
                Number(P.value) + Number(Q.value) + Number(R.value) +
                Number(S.value) + Number(T.value) + Number(V.value) + Number(W.value) +
                Number(X.value),
                Number(P.value) + Number(Q.value) + Number(R.value) +
                Number(S.value) + Number(T.value) + Number(V.value) + Number(W.value) +
                Number(X.value) + Number(Y.value),
                Number(P.value) + Number(Q.value) + Number(R.value) +
                Number(S.value) + Number(T.value) + Number(V.value) + Number(W.value) +
                Number(X.value) + Number(Y.value) + Number(Z.value),
                Number(P.value) + Number(Q.value) + Number(R.value) +
                Number(S.value) + Number(T.value) + Number(V.value) + Number(W.value) +
                Number(X.value) + Number(Y.value) + Number(Z.value) + Number(AA.value),
                Number(P.value) + Number(Q.value) + Number(R.value) +
                Number(S.value) + Number(T.value) + Number(V.value) + Number(W.value) +
                Number(X.value) + Number(Y.value) + Number(Z.value) + Number(AA.value) + Number(AB.value)
            ]
        },
        {
            name: 'CCS Emmissions',
            type: 'bar',
            stack: 'Total',
            silent: true,
            label: {
                show: true,
                position: 'top'
            },
            data: [P.value, '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-']
        },
        {
            name: 'CO2 from gas reformations',
            type: 'bar',
            stack: 'Total',
            silent: true,
            label: {
                show: true,
                position: 'top'
            },
            data: ['-', Q.value, '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-']
        },
        {
            name: 'Feedstock upstream',
            type: 'bar',
            stack: 'Total',
            silent: true,
            label: {
                show: true,
                position: 'top'
            },
            data: ['-', '-', R.value, '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-']
        },
        {
            name: 'Process Electricity',
            type: 'bar',
            stack: 'Total',
            silent: true,
            label: {
                show: true,
                position: 'top'
            },
            data: ['-', '-', '-', S.value, '-', '-', '-', '-', '-', '-', '-', '-', '-', '-']
        },
        {
            name: 'Heat Consumption',
            type: 'bar',
            stack: 'Total',
            silent: true,
            label: {
                show: true,
                position: 'top'
            },
            data: ['-', '-', '-', '-', T.value, '-', '-', '-', '-', '-', '-', '-', '-', '-']
        },
        {
            name: 'Compression',
            type: 'bar',
            stack: 'Total',
            silent: true,
            label: {
                show: true,
                position: 'top'
            },
            data: ['-', '-', '-', '-', '-', V.value, '-', '-', '-', '-', '-', '-', '-']
        },
        {
            name: 'Liquefaction',
            type: 'bar',
            stack: 'Total',
            silent: true,
            label: {
                show: true,
                position: 'top'
            },
            data: ['-', '-', '-', '-', '-', '-', W.value, '-', '-', '-', '-', '-', '-']
        },
        {
            name: 'LOCH',
            type: 'bar',
            stack: 'Total',
            silent: true,
            label: {
                show: true,
                position: 'top'
            },
            data: ['-', '-', '-', '-', '-', '-', '-', X.value, '-', '-', '-', '-', '-']
        },
        {
            name: 'Ammonia',
            type: 'bar',
            stack: 'Total',
            silent: true,
            label: {
                show: true,
                position: 'top'
            },
            data: ['-', '-', '-', '-', '-', '-', '-', '-', Y.value, '-', '-', '-', '-']
        },
        {
            name: 'Shipping',
            type: 'bar',
            stack: 'Total',
            silent: true,
            label: {
                show: true,
                position: 'top'
            },
            data: ['-', '-', '-', '-', '-', '-', '-', '-', '-', Z.value, '-', '-', '-']
        },
        {
            name: 'Pipeline',
            type: 'bar',
            stack: 'Total',
            silent: true,
            label: {
                show: true,
                position: 'top'
            },
            data: ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', AA.value, '-', '-']
        },
        {
            name: 'Trucking',
            type: 'bar',
            stack: 'Total',
            silent: true,
            label: {
                show: true,
                position: 'top'
            },
            data: ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', AB.value, '-']
        },
        {
            name: 'H2 fugitives',
            type: 'bar',
            stack: 'Total',
            silent: true,
            label: {
                show: true,
                position: 'top'
            },
            data: ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', AC.value]
        }
    ]
};
const LTE_Chart = {
    title: {
        text: ''
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {},
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '',
            type: 'bar',
            stack: 'Total',
            silent: true,
            itemStyle: {
                borderColor: 'transparent',
                color: 'transparent'
            },
            emphasis: {
                itemStyle: {
                    borderColor: 'transparent',
                    color: 'transparent'
                }
            },
            data: [0,
                Number(S.value),
                Number(S.value) + Number(V.value),
                Number(S.value) + Number(V.value) + Number(W.value),
                Number(S.value) + Number(V.value) + Number(W.value) + Number(X.value),
                Number(S.value) + Number(V.value) + Number(W.value) + Number(X.value) + Number(Y.value),
                Number(S.value) + Number(V.value) + Number(W.value) + Number(X.value) + Number(Y.value) +
                Number(Z.value),
                Number(S.value) + Number(V.value) + Number(W.value) + Number(X.value) + Number(Y.value) +
                Number(Z.value) + Number(AA.value),
                Number(S.value) + Number(V.value) + Number(W.value) + Number(X.value) + Number(Y.value) +
                Number(Z.value) + Number(AA.value) + Number(AB.value),
                Number(S.value) + Number(V.value) + Number(W.value) + Number(X.value) + Number(Y.value) +
                Number(Z.value) + Number(AA.value) + Number(AB.value) + Number(AC.value)
            ]
        },
        {
            name: 'Process Electricity',
            type: 'bar',
            stack: 'Total',
            silent: true,
            label: {
                show: true,
                position: 'top'
            },
            data: [S.value, '-', '-', '-', '-', '-', '-', '-', '-', '-', '-']
        },
        {
            name: 'Compression',
            type: 'bar',
            stack: 'Total',
            silent: true,
            label: {
                show: true,
                position: 'top'
            },
            data: ['-', V.value, '-', '-', '-', '-', '-', '-', '-']
        },
        {
            name: 'Liquefaction',
            type: 'bar',
            stack: 'Total',
            silent: true,
            label: {
                show: true,
                position: 'top'
            },
            data: ['-', '-', W.value, '-', '-', '-', '-', '-', '-']
        },
        {
            name: 'LOCH',
            type: 'bar',
            stack: 'Total',
            silent: true,
            label: {
                show: true,
                position: 'top'
            },
            data: ['-', '-', '-', X.value, '-', '-', '-', '-', '-']
        },
        {
            name: 'Ammonia',
            type: 'bar',
            stack: 'Total',
            silent: true,
            label: {
                show: true,
                position: 'top'
            },
            data: ['-', '-', '-', '-', Y.value, '-', '-', '-', '-']
        },
        {
            name: 'Shipping',
            type: 'bar',
            stack: 'Total',
            silent: true,
            label: {
                show: true,
                position: 'top'
            },
            data: ['-', '-', '-', '-', '-', Z.value, '-', '-', '-']
        },
        {
            name: 'Pipeline',
            type: 'bar',
            stack: 'Total',
            silent: true,
            label: {
                show: true,
                position: 'top'
            },
            data: ['-', '-', '-', '-', '-', '-', AA.value, '-', '-']
        },
        {
            name: 'Trucking',
            type: 'bar',
            stack: 'Total',
            silent: true,
            label: {
                show: true,
                position: 'top'
            },
            data: ['-', '-', '-', '-', '-', '-', '-', AB.value, '-']
        },
        {
            name: 'H2 fugitives',
            type: 'bar',
            stack: 'Total',
            silent: true,
            label: {
                show: true,
                position: 'top'
            },
            data: ['-', '-', '-', '-', '-', '-', '-', '-', AC.value]
        }
    ]
};
const HTE_Chart = {
    title: {
        text: ''
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {},
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '',
            type: 'bar',
            stack: 'Total',
            silent: true,
            itemStyle: {
                borderColor: 'transparent',
                color: 'transparent'
            },
            emphasis: {
                itemStyle: {
                    borderColor: 'transparent',
                    color: 'transparent'
                }
            },
            data: [0,
                Number(S.value),
                Number(S.value) + Number(T.value),
                Number(S.value) + Number(T.value) + Number(V.value),
                Number(S.value) + Number(T.value) + Number(V.value) + Number(W.value),
                Number(S.value) + Number(T.value) + Number(V.value) +
                Number(W.value) + Number(X.value),
                Number(S.value) + Number(T.value) + Number(V.value) +
                Number(W.value) + Number(X.value) + Number(Y.value),
                Number(S.value) + Number(T.value) + Number(V.value) +
                Number(W.value) + Number(X.value) + Number(Y.value) + Number(Z.value),
                Number(S.value) + Number(T.value) + Number(V.value) +
                Number(W.value) + Number(X.value) + Number(Y.value) + Number(Z.value) + Number(AA.value),
                Number(S.value) + Number(T.value) + Number(V.value) +
                Number(W.value) + Number(X.value) + Number(Y.value) + Number(Z.value) + Number(AA.value) +
                Number(AB.value),
                Number(S.value) + Number(T.value) + Number(V.value) +
                Number(W.value) + Number(X.value) + Number(Y.value) + Number(Z.value) + Number(AA.value) +
                Number(AB.value) + Number(AC.value)
            ]
        },
        {
            name: 'Process Electricity',
            type: 'bar',
            stack: 'Total',
            silent: true,
            label: {
                show: true,
                position: 'top'
            },
            data: [S.value, '-', '-', '-', '-', '-', '-', '-', '-', '-', '-']
        },
        {
            name: 'Heat Consumption',
            type: 'bar',
            stack: 'Total',
            silent: true,
            label: {
                show: true,
                position: 'top'
            },
            data: ['-', T.value, '-', '-', '-', '-', '-', '-', '-', '-', '-']
        },
        {
            name: 'Compression',
            type: 'bar',
            stack: 'Total',
            silent: true,
            label: {
                show: true,
                position: 'top'
            },
            data: ['-', '-', V.value, '-', '-', '-', '-', '-', '-', '-']
        },
        {
            name: 'Liquefaction',
            type: 'bar',
            stack: 'Total',
            silent: true,
            label: {
                show: true,
                position: 'top'
            },
            data: ['-', '-', '-', W.value, '-', '-', '-', '-', '-', '-']
        },
        {
            name: 'LOCH',
            type: 'bar',
            stack: 'Total',
            silent: true,
            label: {
                show: true,
                position: 'top'
            },
            data: ['-', '-', '-', '-', X.value, '-', '-', '-', '-', '-']
        },
        {
            name: 'Ammonia',
            type: 'bar',
            stack: 'Total',
            silent: true,
            label: {
                show: true,
                position: 'top'
            },
            data: ['-', '-', '-', '-', '-', Y.value, '-', '-', '-', '-']
        },
        {
            name: 'Shipping',
            type: 'bar',
            stack: 'Total',
            silent: true,
            label: {
                show: true,
                position: 'top'
            },
            data: ['-', '-', '-', '-', '-', '-', Z.value, '-', '-', '-']
        },
        {
            name: 'Pipeline',
            type: 'bar',
            stack: 'Total',
            silent: true,
            label: {
                show: true,
                position: 'top'
            },
            data: ['-', '-', '-', '-', '-', '-', '-', AA.value, '-', '-']
        },
        {
            name: 'Trucking',
            type: 'bar',
            stack: 'Total',
            silent: true,
            label: {
                show: true,
                position: 'top'
            },
            data: ['-', '-', '-', '-', '-', '-', '-', '-', AB.value, '-']
        },
        {
            name: 'H2 fugitives',
            type: 'bar',
            stack: 'Total',
            silent: true,
            label: {
                show: true,
                position: 'top'
            },
            data: ['-', '-', '-', '-', '-', '-', '-', '-', '-', AC.value]
        }
    ]
};

document.querySelectorAll('.NGP1').forEach((el) => {
    el.addEventListener('change', (e): void => {
        queryObj.sheet = 'Summary - production';
        const target = e.target as HTMLInputElement;
        const id = target.id;
        switch (id) {
            case SP_E33.id:
                queryObj.cells.cell = 'E33';
            case SP_E34.id:
                queryObj.cells.cell = 'E34';
            case SP_E35.id:
                queryObj.cells.cell = 'E35';
                if (SP_E35.value === 'true') {
                    SP_E38.removeAttribute('disabled');
                } else {
                    SP_E38.setAttribute('disabled', 'disabled');
                }
            case SP_E36.id:
                queryObj.cells.cell = 'E36';
            case SP_E37.id:
                queryObj.cells.cell = 'E37';
            case SP_E38.id:
                queryObj.cells.cell = 'E38';
            default:
                queryObj.cells.value = target.value;
                queryObj.result.cells = 'N5:AC5';
                break;
        }
        createCharts(NGR_Chart);
    });
});
document.querySelectorAll('.NGP2').forEach((el) => {
    el.addEventListener('change', (e): void => {
        queryObj.sheet = 'Summary - production';
        const target = e.target as HTMLInputElement;
        const id = target.id;
        switch (id) {
            case SP_F33.id:
                queryObj.cells.cell = 'F33';
            case SP_F34.id:
                queryObj.cells.cell = 'F34';
            case SP_F35.id:
                queryObj.cells.cell = 'F35';
                if (SP_F35.value === 'true') {
                    SP_F38.removeAttribute('disabled');
                } else {
                    SP_F38.setAttribute('disabled', 'disabled');
                }
            case SP_F36.id:
                queryObj.cells.cell = 'F36';
            case SP_F37.id:
                queryObj.cells.cell = 'F37';
            case SP_F38.id:
                queryObj.cells.cell = 'F38';
            default:
                queryObj.cells.value = target.value;
                queryObj.result.cells = 'N6:AC6';
                break;
        }
        createCharts(NGR_Chart);
    });
});
document.querySelectorAll('.NGP3').forEach((el) => {
    el.addEventListener('change', (e): void => {
        queryObj.sheet = 'Summary - production';
        const target = e.target as HTMLInputElement;
        const id = target.id;
        switch (id) {
            case SP_G33.id:
                queryObj.cells.cell = 'G33';
            case SP_G34.id:
                queryObj.cells.cell = 'G34';
            case SP_G35.id:
                queryObj.cells.cell = 'G35';
                queryObj.cells.value = target.value;
                if (SP_G35.value === 'true') {
                    SP_G38.removeAttribute('disabled');
                } else {
                    SP_G38.setAttribute('disabled', 'disabled');
                }
            case SP_G36.id:
                queryObj.cells.cell = 'G36';
            case SP_G37.id:
                queryObj.cells.cell = 'G37';
            case SP_G38.id:
                queryObj.cells.cell = 'G38';
            default:
                queryObj.cells.value = target.value;
                queryObj.result.cells = 'N7:AC7';
                break;
        }
        createCharts(NGR_Chart);
    });
});
document.querySelectorAll('.NGP4').forEach((el) => {
    el.addEventListener('change', (e): void => {
        queryObj.sheet = 'Summary - production';
        const target = e.target as HTMLInputElement;
        const id = target.id;
        switch (id) {
            case SP_H33.id:
                queryObj.cells.cell = 'H33';
            case SP_H34.id:
                queryObj.cells.cell = 'H34';
            case SP_H35.id:
                queryObj.cells.cell = 'H35';
                if (SP_H35.value === 'true') {
                    SP_H38.removeAttribute('disabled');
                } else {
                    SP_H38.setAttribute('disabled', 'disabled');
                }
            case SP_H36.id:
                queryObj.cells.cell = 'H36';
            case SP_H37.id:
                queryObj.cells.cell = 'H37';
            case SP_H38.id:
                queryObj.cells.cell = 'H38';
            default:
                queryObj.cells.value = target.value;
                queryObj.result.cells = 'N8:AC8';
                break;
        }
        createCharts(NGR_Chart);
    });
});

document.querySelectorAll('.LTEP1').forEach((el) => {
    el.addEventListener('change', (e): void => {
        queryObj.sheet = 'Summary - production';
        const target = e.target as HTMLInputElement;
        const id = target.id;
        switch (id) {
            case SP_J33.id:
                queryObj.cells.cell = 'J33';
            case SP_J34.id:
                queryObj.cells.cell = 'J34';
            case SP_J35.id:
                queryObj.cells.cell = 'J35';
            case SP_J36.id:
                queryObj.cells.cell = 'J36';
            case SP_J37.id:
                queryObj.cells.cell = 'J37';
            default:
                queryObj.cells.value = target.value;
                // queryObj.result.cells = 'N9:AC9';
                break;
        }
        createCharts(LTE_Chart);
    });
});
document.querySelectorAll('.LTEP2').forEach((el) => {
    el.addEventListener('change', (e): void => {
        queryObj.sheet = 'Summary - production';
        const target = e.target as HTMLInputElement;
        const id = target.id;
        switch (id) {
            case SP_K33.id:
                queryObj.cells.cell = 'K33';
            case SP_K34.id:
                queryObj.cells.cell = 'K34';
            case SP_K35.id:
                queryObj.cells.cell = 'K35';
            case SP_K36.id:
                queryObj.cells.cell = 'K36';
            case SP_K37.id:
                queryObj.cells.cell = 'K37';
            default:
                queryObj.cells.value = target.value;
                queryObj.result.cells = 'N10:AC10';
                break;
        }
        createCharts(LTE_Chart);
    });
});
document.querySelectorAll('.LTEP3').forEach((el) => {
    el.addEventListener('change', (e): void => {
        queryObj.sheet = 'Summary - production';
        const target = e.target as HTMLInputElement;
        const id = target.id;
        switch (id) {
            case SP_L33.id:
                queryObj.cells.cell = 'L33';
            case SP_L34.id:
                queryObj.cells.cell = 'L34';
            case SP_L35.id:
                queryObj.cells.cell = 'L35';
            case SP_L36.id:
                queryObj.cells.cell = 'L36';
            case SP_L37.id:
                queryObj.cells.cell = 'L37';
            default:
                queryObj.cells.value = target.value;
                queryObj.result.cells = 'N11:AC11';
                break;
        }
        createCharts(LTE_Chart);
    });
});
document.querySelectorAll('.LTEP4').forEach((el) => {
    el.addEventListener('change', (e): void => {
        queryObj.sheet = 'Summary - production';
        const target = e.target as HTMLInputElement;
        const id = target.id;
        switch (id) {
            case SP_M33.id:
                queryObj.cells.cell = 'M33';
            case SP_M34.id:
                queryObj.cells.cell = 'M34';
            case SP_M35.id:
                queryObj.cells.cell = 'M35';
            case SP_M36.id:
                queryObj.cells.cell = 'M36';
            case SP_M37.id:
                queryObj.cells.cell = 'M37';
            default:
                queryObj.cells.value = target.value;
                queryObj.result.cells = 'N12:AC12';
                break;
        }
        createCharts(LTE_Chart);
    });
});

document.querySelectorAll('.HTEP1').forEach((el) => {
    el.addEventListener('change', (e): void => {
        queryObj.sheet = 'Summary - production';
        const target = e.target as HTMLInputElement;
        const id = target.id;
        switch (id) {
            case SP_O33.id:
                queryObj.cells.cell = 'O33';
            case SP_O34.id:
                queryObj.cells.cell = 'O34';
            case SP_O35.id:
                queryObj.cells.cell = 'O35';
            case SP_O36.id:
                queryObj.cells.cell = 'O36';
            case SP_O37.id:
                queryObj.cells.cell = 'O37';
            default:
                queryObj.cells.value = target.value;
                queryObj.result.cells = 'N13:AC13';
                break;
        }
        createCharts(HTE_Chart);
    });
});
document.querySelectorAll('.HTEP2').forEach((el) => {
    el.addEventListener('change', (e): void => {
        queryObj.sheet = 'Summary - production';
        const target = e.target as HTMLInputElement;
        const id = target.id;
        switch (id) {
            case SP_P33.id:
                queryObj.cells.cell = 'P33';
            case SP_P34.id:
                queryObj.cells.cell = 'P34';
            case SP_P35.id:
                queryObj.cells.cell = 'P35';
            case SP_P36.id:
                queryObj.cells.cell = 'P36';
            case SP_P37.id:
                queryObj.cells.cell = 'P37';
            default:
                queryObj.cells.value = target.value;
                queryObj.result.cells = 'N14:AC14';
                break;
        }
        createCharts(HTE_Chart);
    });
});
document.querySelectorAll('.HTEP3').forEach((el) => {
    el.addEventListener('change', (e): void => {
        queryObj.sheet = 'Summary - production';
        const target = e.target as HTMLInputElement;
        const id = target.id;
        switch (id) {
            case SP_Q33.id:
                queryObj.cells.cell = 'Q33';
            case SP_Q34.id:
                queryObj.cells.cell = 'Q34';
            case SP_Q35.id:
                queryObj.cells.cell = 'Q35';
            case SP_Q36.id:
                queryObj.cells.cell = 'Q36';
            case SP_Q37.id:
                queryObj.cells.cell = 'Q37';
            default:
                queryObj.cells.value = target.value;
                queryObj.result.cells = 'N15:AC15';
                break;
        }
        createCharts(HTE_Chart);
    });
});
document.querySelectorAll('.HTEP4').forEach((el) => {
    el.addEventListener('change', (e): void => {
        queryObj.sheet = 'Summary - production';
        const target = e.target as HTMLInputElement;
        const id = target.id;
        switch (id) {
            case SP_R33.id:
                queryObj.cells.cell = 'R33';
            case SP_R34.id:
                queryObj.cells.cell = 'R34';
            case SP_R35.id:
                queryObj.cells.cell = 'R35';
            case SP_R36.id:
                queryObj.cells.cell = 'R36';
            case SP_R37.id:
                queryObj.cells.cell = 'R37';
            default:
                queryObj.cells.value = target.value;
                queryObj.result.cells = 'N16:AC16';
                break;
        }
        createCharts(HTE_Chart);
    });
});

document.querySelectorAll('.TRANSPORT1').forEach((el) => {
    el.addEventListener('change', (e): void => {
        queryObj.sheet = 'Transport and distribution';
        const target = e.target as HTMLInputElement;
        const id = target.id;
        switch (id) {
            case TD_F3.id:
                queryObj.cells.cell = 'F3';
            case TD_F4.id:
                queryObj.cells.cell = 'F4';
            case TD_F5.id:
                queryObj.cells.cell = 'F5';
            case TD_F8.id:
                queryObj.cells.cell = 'F8';
            case TD_F10.id:
                queryObj.cells.cell = 'F10';
            case TD_F11.id:
                queryObj.cells.cell = 'F11';
            case TD_F12.id:
                queryObj.cells.cell = 'F12';
            default:
                queryObj.cells.value = target.value;
                break;
        }
    });
});
document.querySelectorAll('.TRANSPORT2').forEach((el) => {
    el.addEventListener('change', (e): void => {
        queryObj.sheet = 'Transport and distribution';
        const target = e.target as HTMLInputElement;
        const id = target.id;
        switch (id) {
            case TD_AA3.id:
                queryObj.cells.cell = 'AA3';
            case TD_AA4.id:
                queryObj.cells.cell = 'AA4';
            case TD_AA5.id:
                queryObj.cells.cell = 'AA5';
            case TD_AA10.id:
                queryObj.cells.cell = 'AA10';
            case TD_AA11.id:
                queryObj.cells.cell = 'AA11';
            case TD_AA12.id:
                queryObj.cells.cell = 'AA12';
            default:
                queryObj.cells.value = target.value;
                break;
        }
    });
});
document.querySelectorAll('.TRANSPORT3').forEach((el) => {
    el.addEventListener('change', (e): void => {
        queryObj.sheet = 'Transport and distribution';
        const target = e.target as HTMLInputElement;
        const id = target.id;
        switch (id) {
            case TD_AV3.id:
                queryObj.cells.cell = 'AV3';
            case TD_AV4.id:
                queryObj.cells.cell = 'AV4';
            case TD_AV5.id:
                queryObj.cells.cell = 'AV5';
            case TD_AV9.id:
                queryObj.cells.cell = 'AV9';
            case TD_AV10.id:
                queryObj.cells.cell = 'AV10';
            case TD_AV11.id:
                queryObj.cells.cell = 'AV11';
            case TD_AV12.id:
                queryObj.cells.cell = 'AV12';
            default:
                queryObj.cells.value = target.value;
                break;
        }
    });
});
document.querySelectorAll('.TRANSPORT4').forEach((el) => {
    el.addEventListener('change', (e): void => {
        queryObj.sheet = 'Transport and distribution';
        const target = e.target as HTMLInputElement;
        const id = target.id;
        switch (id) {
            case TD_BQ3.id:
                queryObj.cells.cell = 'BQ3';
            case TD_BQ4.id:
                queryObj.cells.cell = 'BQ4';
            case TD_BQ5.id:
                queryObj.cells.cell = 'BQ5';
            case TD_BQ8.id:
                queryObj.cells.cell = 'BQ8';
            case TD_BQ10.id:
                queryObj.cells.cell = 'BQ10';
            case TD_BQ11.id:
                queryObj.cells.cell = 'BQ11';
            case TD_BQ12.id:
                queryObj.cells.cell = 'BQ12';
            default:
                queryObj.cells.value = target.value;
                break;
        }
    });
});

document.querySelectorAll('.HCFT').forEach((el) => {
    el.addEventListener('change', (e): void => {
        const target = e.target as HTMLInputElement;
        const id = target.id;
        if (target.value === 'Compressed H2' && id === 'TD_F3') {
            wr_TD_F8.style.display = 'none';
        }
        if (target.value === 'Compressed H2' && id === 'TD_AV3') {
            wr_TD_AV9.style.display = 'none';
        }
        if (target.value === 'Compressed H2' && id === 'TD_BQ3') {
            wr_TD_BQ8.style.display = 'none';
        }
        if (target.value === 'Liquefied H2' && id === 'TD_F3') {
            wr_TD_F8.style.display = 'none';
        }
        if (target.value === 'Liquefied H2' && id === 'TD_AV3') {
            TD_AV9.style.display = 'flex';
        }
        if (target.value === 'Liquefied H2' && id === 'TD_BQ3') {
            wr_TD_BQ8.style.display = 'none';
        }
        if (target.value === 'Ammonia' && id === 'TD_F3') {
            wr_TD_F8.style.display = 'flex';
        }
        if (target.value === 'Ammonia' && id === 'TD_AV3') {
            wr_TD_AV9.style.display = 'none';
        }
        if (target.value === 'Ammonia' && id === 'TD_BQ3') {
            wr_TD_BQ8.style.display = 'flex';
        }
        if (target.value === 'LOHC' && id === 'TD_F3') {
            wr_TD_F8.style.display = 'flex';
        }
        if (target.value === 'LOHC' && id === 'TD_AV3') {
            wr_TD_AV9.style.display = 'none';
        }
        if (target.value === 'LOHC' && id === 'TD_BQ3') {
            wr_TD_BQ8.style.display = 'flex';
        }
    });
});


document.querySelectorAll('.mutable_select').forEach(el => {
    const table = document.getElementById('selectTable') as HTMLSelectElement;
    const pathway = document.getElementById('selectPathway') as HTMLSelectElement;
    el.addEventListener('change', function(e) {
        const NGR1 = document.getElementById('NGRPathway1') as HTMLElement;
        const NGR2 = document.getElementById('NGRPathway2') as HTMLElement;
        const NGR3 = document.getElementById('NGRPathway3') as HTMLElement;
        const NGR4 = document.getElementById('NGRPathway4') as HTMLElement;

        const LTE1 = document.getElementById('LTEPathway1') as HTMLElement;
        const LTE2 = document.getElementById('LTEPathway2') as HTMLElement;
        const LTE3 = document.getElementById('LTEPathway3') as HTMLElement;
        const LTE4 = document.getElementById('LTEPathway4') as HTMLElement;

        const HTE1 = document.getElementById('HTEPathway1') as HTMLElement;
        const HTE2 = document.getElementById('HTEPathway2') as HTMLElement;
        const HTE3 = document.getElementById('HTEPathway3') as HTMLElement;
        const HTE4 = document.getElementById('HTEPathway4') as HTMLElement;

        const transport1 = document.getElementById('transport1') as HTMLElement;
        const transport2 = document.getElementById('transport2') as HTMLElement;
        const transport3 = document.getElementById('transport3') as HTMLElement;
        const transport4 = document.getElementById('transport4') as HTMLElement;

        if (pathway.value === 'Pathway1' && table.value === 'NGR') {
            NGR1.style.display = 'block';
            NGR2.style.display = 'none';
            NGR3.style.display = 'none';
            NGR4.style.display = 'none';
            NGBlockResults();
            showTransport1();
            LTEBlock();
            HTEBlock();
            // queryObj.result.cells = 'N5:AC5';
            createCharts(NGR_Chart);
        }
        if (pathway.value === 'Pathway1' && table.value === 'LTE') {
            LTE1.style.display = 'block';
            LTE2.style.display = 'none';
            LTE3.style.display = 'none';
            LTE4.style.display = 'none';
            showTransport1();
            NRGBlock();
            HTEBlock();
            LTEBlockResults();
            // queryObj.result.cells = 'N9:AC9';
            createCharts(LTE_Chart);
        }
        if (pathway.value === 'Pathway1' && table.value === 'HTE') {
            HTE1.style.display = 'block';
            HTE2.style.display = 'none';
            HTE3.style.display = 'none';
            HTE4.style.display = 'none';
            HTEBlockResults();
            showTransport1();
            NRGBlock();
            LTEBlock();
            // queryObj.result.cells = 'N13:AC13';
            createCharts(HTE_Chart);
        }
        if (pathway.value === 'Pathway2' && table.value === 'NGR') {
            NGR1.style.display = 'none';
            NGR2.style.display = 'block';
            NGR3.style.display = 'none';
            NGR4.style.display = 'none';
            NGBlockResults();
            showTransport2();
            LTEBlock();
            HTEBlock();
            // queryObj.result.cells = 'N6:AC6';
            createCharts(NGR_Chart);
        }
        if (pathway.value === 'Pathway2' && table.value === 'LTE') {
            LTE1.style.display = 'none';
            LTE2.style.display = 'block';
            LTE3.style.display = 'none';
            LTE4.style.display = 'none';
            LTEBlockResults();
            showTransport2();
            NRGBlock();
            HTEBlock();
            // queryObj.result.cells = 'N10:AC10';
            createCharts(LTE_Chart)
        }
        if (pathway.value === 'Pathway2' && table.value === 'HTE') {
            HTE1.style.display = 'none';
            HTE2.style.display = 'block';
            HTE3.style.display = 'none';
            HTE4.style.display = 'none';
            HTEBlockResults();
            showTransport2();
            NRGBlock();
            LTEBlock();
            // queryObj.result.cells = 'N14:AC14';
            createCharts(HTE_Chart)
        }
        if (pathway.value === 'Pathway3' && table.value === 'NGR') {
            NGR1.style.display = 'none';
            NGR2.style.display = 'none';
            NGR3.style.display = 'block';
            NGR4.style.display = 'none';
            NGBlockResults();
            showTransport3();
            LTEBlock();
            HTEBlock();
            // queryObj.result.cells = 'N7:AC7';
            createCharts(NGR_Chart);
        }
        if (pathway.value === 'Pathway3' && table.value === 'LTE') {
            LTE1.style.display = 'none';
            LTE2.style.display = 'none';
            LTE3.style.display = 'block';
            LTE4.style.display = 'none';
            LTEBlockResults();
            showTransport3();
            NRGBlock();
            HTEBlock();
            // queryObj.result.cells = 'N11:AC11';
            createCharts(LTE_Chart)
        }
        if (pathway.value === 'Pathway3' && table.value === 'HTE') {
            HTE1.style.display = 'none';
            HTE2.style.display = 'none';
            HTE3.style.display = 'block';
            HTE4.style.display = 'none';
            HTEBlockResults();
            showTransport3();
            NRGBlock();
            LTEBlock();
            // queryObj.result.cells = 'N15:AC15';
            createCharts(HTE_Chart)
        }
        if (pathway.value === 'Pathway4' && table.value === 'NGR') {
            NGR1.style.display = 'none';
            NGR2.style.display = 'none';
            NGR3.style.display = 'none';
            NGR4.style.display = 'block';
            NGBlockResults();
            showTransport4();
            LTEBlock();
            HTEBlock();
            // queryObj.result.cells = 'N8:AC8';
            createCharts(NGR_Chart);
        }
        if (pathway.value === 'Pathway4' && table.value === 'LTE') {
            LTE1.style.display = 'none';
            LTE2.style.display = 'none';
            LTE3.style.display = 'none';
            LTE4.style.display = 'block';
            LTEBlockResults();
            showTransport4();
            NRGBlock();
            HTEBlock();
            // queryObj.result.cells = 'N12:AC12';
            createCharts(LTE_Chart)
        }
        if (pathway.value === 'Pathway4' && table.value === 'HTE') {
            HTE1.style.display = 'none';
            HTE2.style.display = 'none';
            HTE3.style.display = 'none';
            HTE4.style.display = 'block';
            HTEBlockResults();
            showTransport4();
            NRGBlock();
            LTEBlock();
            // queryObj.result.cells = 'N16:AC16';
            createCharts(HTE_Chart)
        }

        function LTEBlock() {
            LTE1.style.display = 'none';
            LTE2.style.display = 'none';
            LTE3.style.display = 'none';
            LTE4.style.display = 'none';
        }

        function LTEBlockResults() {
            wr_P.style.display = 'none';
            wr_Q.style.display = 'none';
            wr_R.style.display = 'none';
            wr_T.style.display = 'none';
            wr_S.style.display = 'flex';
        }

        function HTEBlockResults() {
            wr_P.style.display = 'none';
            wr_Q.style.display = 'none';
            wr_R.style.display = 'none';
            wr_S.style.display = 'flex';
            wr_T.style.display = 'flex';
        }

        function NGBlockResults() {
            wr_P.style.display = 'flex';
            wr_Q.style.display = 'flex';
            wr_R.style.display = 'flex';
            wr_S.style.display = 'flex';
            wr_T.style.display = 'flex';

            V.style.display = 'block';
            W.style.display = 'block';
            X.style.display = 'block';
            Y.style.display = 'block';
            Z.style.display = 'block';
            AA.style.display = 'block';
            AB.style.display = 'block';
            AC.style.display = 'block';
        }

        function HTEBlock() {
            HTE1.style.display = 'none';
            HTE2.style.display = 'none';
            HTE3.style.display = 'none';
            HTE4.style.display = 'none';
        }

        function NRGBlock() {
            NGR1.style.display = 'none';
            NGR2.style.display = 'none';
            NGR3.style.display = 'none';
            NGR4.style.display = 'none';
        }

        function showTransport1() {
            transport1.style.display = 'block';
            transport2.style.display = 'none';
            transport3.style.display = 'none';
            transport4.style.display = 'none';
        }

        function showTransport2() {
            transport1.style.display = 'none';
            transport2.style.display = 'block';
            transport3.style.display = 'none';
            transport4.style.display = 'none';
        }

        function showTransport3() {
            transport1.style.display = 'none';
            transport2.style.display = 'none';
            transport3.style.display = 'block';
            transport4.style.display = 'none';
        }

        function showTransport4() {
            transport1.style.display = 'none';
            transport2.style.display = 'none';
            transport3.style.display = 'none';
            transport4.style.display = 'block';
        }
    });
});


// Initialize the echarts instance based on the prepared dom
const chart = document.getElementById('main') as HTMLElement;
const myChart = echarts.init(document.getElementById('main') as HTMLElement);
const chart2 = document.getElementById('main2') as HTMLElement;
const chart3 = document.getElementById('main3') as HTMLElement;



function createCharts(optionChart: any) {
    let option;
    // Specify the configuration items and data for the chart
    if (!optionChart || optionChart === NGR_Chart) {
        option = NGR_Chart;
        chart.style.display='block';
        chart3.style.display = 'none';
        chart2.style.display = 'none'
        myChart.setOption(option);
    } else if (optionChart === LTE_Chart) {
        chart.style.display = 'none'
        chart3.style.display = 'none';
        chart2.style.display='block';
        const myChart2 = echarts.init(chart2);
        myChart2.setOption(LTE_Chart)
    }else if (optionChart === HTE_Chart) {
        chart.style.display = 'none';
        chart2.style.display = 'none'
        chart3.style.display='block';
        const myChart3 = echarts.init(chart3);
        myChart3.setOption(HTE_Chart)
    }  else {
        // option = optionChart;
    }
}

setTimeout(createCharts, 3000);

