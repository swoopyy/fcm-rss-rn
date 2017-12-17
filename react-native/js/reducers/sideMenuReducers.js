/**
 * Created by denissamohvalov on 16.03.17.
 */
import {
    ON_ALL_SELECTED,
    ON_TAGS_SELECTED,
    ON_MANAGE_CHANNELS_SELECTED,
    GET_FEEDS_STAT
} from '../constants';
import {getFeedStat} from '../db/handlers';

let initialState = {
    isAllSelected: true,
    isManageChannelsSelected: false,
    isTagsSelected: false,
};

export default function sideMenuState(state = initialState, action)
{
    switch (action.type) {
        case ON_ALL_SELECTED:
            return {
                isAllSelected: true,
                isManageChannelsSelected: false,
                isTagsSelected: false,
            };
        case ON_TAGS_SELECTED:
            return {
                isTagsSelected: true,
                isAllSelected: false,
                isManageChannelsSelected: false,
            };
        case ON_MANAGE_CHANNELS_SELECTED:
            return {
                isManageChannelsSelected: true,
                isAllSelected: false,
                isTagsSelected: false,
            };
        case GET_FEEDS_STAT:
            return {
                ...state,
                ...getFeedStat(),
            };
        default:
            return state;
    }
}

