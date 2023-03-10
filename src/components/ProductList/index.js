import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Product from '../Product'

import { fetchMachineTypes } from '../../actions/machinesTypes'
import { fetchMachines, fetchMachinesByTypeId} from '../../actions/machine'
/*

**isUsed will help decide on which list of machines to gather from
**Need to add pagination after implementing getting items

*/
const ProductList = ({isUsed, type, searchMachines}) => {
    const dispatch = useDispatch()

    
    const types = useSelector((state) => state.machineTypes) || []
    const machines = useSelector((state) => state.machine) || []
    
    const [machines2, setMachines2] = useState([])
    const [typeId, setTypeId] = useState("")

    useEffect(() => {
        dispatch(fetchMachineTypes())
        if(type && types.machineTypes.find(x => x.name == type)) {
            fetchMachinesByTypeId(types.machineTypes.find(x => x.name == type)._id, isUsed)
            setMachines2(machines.machines)
            return
        } else if(searchMachines != undefined) {
            setMachines2(searchMachines)
            return
        }

        dispatch(fetchMachines())
        setMachines2(machines.machines.filter(x => x.isUsed == isUsed))
    }, [type])
    return (
        <div className="row-flex-center flex-wrap">
            {
                machines2 != [] ?
                machines2.map((m, i) => {
                    return <Product
                        key={i}
                        className="p-4"
                        img={m.images[0]}
                        title={m.name}
                        priceNew={isUsed ? m.price.used : m.price.new} onSale={false}
                        id={m._id}
                    ></Product>
                })
                :<p>No machines found.</p>
            }
            {/* {searchMachines == undefined || searchMachines == [] ? <p>No Machines found. Search for a machine.</p> : ''} */}
        </div>
    )
}

export default ProductList
