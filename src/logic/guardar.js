export const guardarJuegoStorage = ({ board, turn })=>{
    window.localStorage.setItem('board', JSON.stringify(board))
    window.localStorage.setItem('turn', turn)
}


export const resetJuegoStorage = ()=>{
    window.localStorage.removeItem("board")
    window.localStorage.removeItem("turn")
}