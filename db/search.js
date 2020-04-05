const client = require('./elasticsearch');

const ElasticSearchClient = (body) => {
    // TODO: get index from utils
    return client.search({index: 'states_outcome', body: body});
}

const queryAllStateOutcomes = async () => {
    const result =  await ElasticSearchClient({ 
        query: {
            bool: {
                must: [],
                filter: [
                    {
                        match_all: {}
                    }
                ],
                should: [],
                must_not: []
            }
        }
    })

    let _source = result['hits']['hits'];
    _source.map((item, i) => _source[i] = item._source);
    return _source;
}

module.exports = {
    ElasticSearchClient,
    queryAllStateOutcomes
}