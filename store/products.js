export  const state = () =>({
    products:[]
})
export const mutations = {
    setProducts(state,products){
     state.products = products
    }
}

export const actions = {
   async fetchProducts({commit}){
        const product = await fetch(
            'https://frontend-test.idaproject.com/api/product'
          ).then(res => res.json())

        await commit('setProducts',product)
    }
}

export const getters = {
    allProducts:s=>s.products,
    sortBy(state){
        let arr = state.products
        for (let i = 0, endI = arr.length - 1; i < endI; i++) {
            let wasSwap = false;
            for (let j = 0, endJ = endI - i; j < endJ; j++) {
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                    wasSwap = true;
                }
            }
            if (!wasSwap) break;
        }
    return arr;
        }
}
