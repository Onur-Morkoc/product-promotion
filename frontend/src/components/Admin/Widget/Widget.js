import React, { useEffect } from 'react'
import "./Widget.scss"
import { BsBag } from 'react-icons/bs'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../../redux/actions/productAction'

const Widget = () => {

    const { projects } = useSelector((state) => state.products);

    const dispatch = useDispatch();

    const widgetsArray = [
        { title: "Projeler", counter: projects.length, link: "Tüm Projeler", percentage: 20 },
        { title: "Onaylı Projeler", counter: projects?.filter(p => p.accept === "onaylı").length, link: "Tüm Projeler", percentage: 20 },
        { title: "Onaysız Projeler", counter: projects?.filter(p => p.accept === "onaysız").length, link: "Tüm Projeler", percentage: 20 }
    ]

    useEffect(() => {
        dispatch(getProduct())
    }, [dispatch]);

    const widget = widgetsArray.map(item => {
        const id = uuidv4()
        return (
            <div className="widget" key={id.toString()}>
                <div className="left">
                    <span className='title'>{item.title}</span>
                    <span className='counter'>{item.counter}</span>
                    <span className='link'>{item.link}</span>
                </div>
                <div className="right">
                    <BsBag className='icon' />
                </div>
            </div>
        )

    })

    return (
        <>
            {widget}
        </>
    )
}

export default Widget