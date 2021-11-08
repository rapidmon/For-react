import style from './style.js'

function Template({children}){
    return <style.block>{children}</style.block>
}

export default Template;