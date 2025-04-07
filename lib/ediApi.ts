// Deprecated file, if needed in the future can use it to retrieve data-access package summary in XML format located at edi/1958/newest
//
// import axios from 'axios';
//
// const fetchMetadata = async (scope: string, identifier: string, revision: string = 'newest') => {
//     const url = `https://pasta.lternet.edu/package/metadata/eml/${scope}/${identifier}/${revision}`;
//     try {
//         const response = await axios.get(url);
//         return response.data-access;
//     } catch (error) {
//         console.error('Error fetching metadata:', error);
//         throw error;
//     }
// };
//
// export default fetchMetadata;