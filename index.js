const { createStore } = require("redux");

initialState = {
    choosenMentees: "Yasin",
    points: 10,
    usia: 20,
    mentees: [],
    alamat: "purworejo",
    minumanFavorite: ["teh botol"],
    makananFavorite: ["indomie"],
    laguFavorite: ["shes gone"],
    ciri: { tinggi: "168 cm", berat: "55 kg" },
    infoLain: { jabatan: "panglima", gaji: 5000000 },
};
const reducer = (state = initialState, action) => {
    //   console.log(state);
    switch (action.type) {
        case "ADD_POINT": {
            return {
                ...state,
                points: state.points + action.points,
            };
        }
        case "ADD_mentee": {
            return {
                ...state,
                mentees: [...state.mentees, action.mentees],
            };
        }
        case "DELETE_mentee": {
            return {
                ...state,
                mentees: state.mentees.filter((mentees) => action.mentees != mentees),
            };
        }
        case "PINDAHAN_BOS": {
            return {
                ...state,
                alamat: action.alamat,
            };
        }
        case "UMUR": {
            return {
                ...state,
                usia: state.usia + action.usia,
            };
        }
        case "MINUMAN": {
            return {
                ...state,
                minumanFavorite: [...state.minumanFavorite, action.minumanFavorite],
            };
        }
        case "MAKAN": {
            return {
                ...state,
                makananFavorite: [...state.makananFavorite, action.makananFavorite],
            };
        }
        case "LAGU": {
            return {
                ...state,
                laguFavorite: [...state.laguFavorite, action.laguFavorite],
            };
        }
        case "GANTI_VALUE": {
            return {
                ...state,
                ciri: {
                    tinggi: action.tinggi,
                    berat: action.berat,
                },
            };
        }
        case "GANTI_NILAI": {
            return {
                ...state,
                infoLain: {
                    jabatan: action.jabatan,
                    gaji: action.gaji,
                },
            };
        }
        default:
            return state;
    }
};

// action created (fs yg menghasilkan objek)
// no.1 add point dinamis
const addPoint = (points) => ({ type: "ADD_POINT", points });
//no.2 add mentees array
const addMentee = (mentees) => ({ type: "ADD_mentee", mentees });
//no.3 remove mentees array
const deleteMentee = (mentees) => ({ type: "DELETE_mentee", mentees });
//no.4 merubah reduce jadi switch case (sudah di ubah di atas)
//no.5
const addUsia = (usia) => ({ type: "UMUR", usia });
const ubahAlamat = (alamat) => ({ type: "PINDAHAN_BOS", alamat });
const addMinumFavorite = (minumanFavorite) => ({
    type: "MINUMAN",
    minumanFavorite,
});
const addMakananFavorite = (makananFavorite) => ({
    type: "MAKAN",
    makananFavorite,
});
const addLaguFavorite = (laguFavorite) => ({ type: "LAGU", laguFavorite });
const changeCiri = (tinggi, berat) => ({ type: "GANTI_VALUE", tinggi, berat });
const changeInfoLain = (jabatan, gaji) => ({ type: "GANTI_NILAI", jabatan, gaji });
// create store
const store = createStore(reducer);
store.subscribe(() => {
    console.log(store.getState());
});

//dispatch
store.dispatch(addPoint(90));
store.dispatch(addPoint(-30));
store.dispatch(addMentee("Asa"));
store.dispatch(addMentee("Ajay"));
store.dispatch(addMentee("Bagas"));
store.dispatch(deleteMentee("Ajay"));
store.dispatch(addUsia(4));
store.dispatch(ubahAlamat("Malang"));
store.dispatch(addMinumFavorite("Teh Kotak"));
store.dispatch(addMakananFavorite("Mie Sedap"));
store.dispatch(addLaguFavorite("Beautifull in white"));
store.dispatch(changeCiri("170 cm", "58 kg"));
store.dispatch(changeInfoLain("warior", 5500000));

