import '@servicenow/sdk/global'
import { UiPage } from '@servicenow/sdk/core'
import foodOrderingPage from '../../client/index.html'

export const forrester_food_ordering = UiPage({
    $id: Now.ID['forrester-food-page'],
    endpoint: 'x_snc_forrester_co_food_menu.do',
    html: foodOrderingPage,
    direct: true
})