export interface ListingTableProps {
    items: Array<any>
}

export const ListingTable = (props: ListingTableProps) => {

    return <table>
        <thead>
        <tr>
            <th className="pr-10">ID</th>
            <th className="pr-10">Nombre</th>
            <th className="pr-10">Descripcion</th>
            <th className="pr-10">Hora de Creacion</th>
        </tr>

        </thead>
        <tbody>
            {
                props.items.map(item => {
                    return <tr key={item.id}>
                        <td className="pr-10">{item.id}</td>
                        <td className="pr-10">{item.title}</td>
                        <td className="pr-10">{item.description}</td>
                        <td className="pr-10">{item.createdAt}</td>
                    </tr>
                })
            }
        </tbody>
    </table>;
}