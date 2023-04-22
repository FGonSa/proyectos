import AdminLayout from "@/layout/AdminLayout";
import useSWR from 'swr'
import Orden from "@/components/Orden";
import axios from "axios";

export default function Admin() {

    const fetcher = () => axios('/api/ordenes').then(datos => datos.data)

    //Hook de NextJS para consultar API's
    //Extraemos de él data, error e isLoading
    const { data, error, isLoading } = useSWR('/api/ordenes', fetcher, {refreshInterval:100})
    

    return(
        <AdminLayout pagina={'Admin'}>
            <h1 className="text-4xl font-black">Order Panel</h1>
            <p className="text-2xl my-10">Admin the orders</p>

            {data && data.length ? data.map(orden => (
                <Orden
                key= {orden.id}
                orden={orden}
                />
            )) : <p>No orders.</p>}
        </AdminLayout>
    )
}