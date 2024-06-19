import React from 'react'
import Title from '../text/Title'
import CardScrollClients from '../card/CardScrollClients'

export default function Clients() {
    return (
        <div>
            <Title text='CLIENTES PARCEIROS' />

            <div className="overflow-x-auto whitespace-no-wrap">
                <div className="inline-block">
                   <CardScrollClients />
                </div>
            </div>

        </div>
    )
}
