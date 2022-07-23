import { useState } from "react"
import Tabs from "../Sres/Tabs"

const Tabsex = props => {
    const [selectedTab, setSelectedTab] = useState(0)
    const array = ["Item one", "Item two", "Item three"]
    return (<div>
        <Tabs onChange={(title) => setSelectedTab(title)} tabsList={array} />
        {selectedTab === array[0] && <p>ITEM ONE</p>}
        {selectedTab === array[1] && <p>ITEM TWO</p>}
        {selectedTab === array[2] && <p>ITEM THREE</p>}
    </div>)
}

export default Tabsex