import { makeStyles } from '@material-ui/core/styles'
export default makeStyles((theme) => ({

    root: {
        maxWidth: '100%',
        // height: '50vh',
    },
    media: {
        height: '35vh',
        paddingTop: '56.25%', // 16:9
    },
    cardActions: {
        // display: 'flex',
        justifyContent: 'flex-end',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    toolbar: theme.mixins.toolbar,
}))