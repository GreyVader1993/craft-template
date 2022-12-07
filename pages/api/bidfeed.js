import feeddata from '../../data/feeddata.json'

export default function handler(req, res) {
    if(req.method !== 'GET') 
        return res.status(405).end(
            JSON.stringify({
                error: `Method ${req.method} not allowed`
            })
        )
        if(!feeddata || feeddata.length === 0 || feeddata === undefined) {
            return res.status(404).json({error: 'No data found'})
        } else {

            // sort feeddata based on count of bids

            let bids = feeddata.map((item) => {
                return item.bids
            })

            let sortedBids = bids.sort((a, b) => {
                return b - a
            })

            let sortedFeedData = []

            sortedBids.forEach((bid) => {
                console.log(bid)
            })

            console.log(sortedFeedData)

            return res.status(200).json(feeddata.slice(0, 10))
        }
}