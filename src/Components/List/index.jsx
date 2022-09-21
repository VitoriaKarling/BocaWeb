export const List=({_id, nome, usuario, descricao, inclusao, palavra_chave})=>{
    return(

        <div key={_id} className='tamiryslinda'>
         <h1>{nome}</h1>
         <p>Usuário: {usuario}</p>
         <p>Descrição: {descricao}</p>
         <p>Inclusão: {inclusao}</p>
         <p>Palavra Chave: {palavra_chave}</p>
        </div>
    )
};
