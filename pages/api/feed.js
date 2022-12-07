import feeddata from '../../data/feeddata.json'

export default function handler(req, res) {
    if(req.method !== 'GET') 
        return res.status(405).end(
            JSON.stringify({
                error: `Method ${req.method} not allowed`
            })
        )
        if(!feeddata) {
            return res.status(404).json({error: 'No data found'})
        } else {
            return res.status(200).json(feeddata.sort(feeddata.date).slice(0, 10))
        }
}