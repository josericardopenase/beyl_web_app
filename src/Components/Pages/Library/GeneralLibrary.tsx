import { AnimatePresence } from 'framer-motion';
import React, { useState, useEffect, useLayoutEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import useDidMountEffect from '../../../CustomHooks/useDidMountEffect';
import LoadingButton from '../../General/Constants/Button/LoadingButton';
import Loading from '../../General/Constants/Loading/Loading';
import VerticallyCenteredModal, {props} from '../../General/Constants/Modals/VerticallyCenteredModal';
import TagList from '../../General/Constants/TagLIst';
import LibraryAdd from './Components/LibraryAdd'
import PublicSelector from './Components/PublicSelector';
import SearchBar from './Components/SearchBar';

interface IRedux{
    privateSelector : any,
    publicSelector: any,
    privateGetAction : any,
    publicGetAction : any,
    loading : any,
    next : any
    loadMore : any
}

interface IProps{
    name : string,
    onClick  : (...props :  any) => void,
    Component : (obj : any) => any,
    show : any,
    setShow:  any,
    modal : props,  
    redux : IRedux,
    getTags : any
}

export default function GeneralLibrary({name ,onClick, Component, modal, redux, show, setShow, getTags} : IProps) {

    const [isPublic, setIsPublic] = useState<boolean>(true);
    const [page, setPage] = useState(1);
    const [searchText, setSearchText] = useState<string>();
    const  [isSearching, setIsSearching] = useState<any>(null)
    const [tags, setTags] = useState<any>([]);

    //redux code
    const privateElements : any[] = useSelector(redux.privateSelector)
    const elements : any[] = useSelector(redux.publicSelector)
    const loading = useSelector(redux.loading)
    const next = useSelector(redux.next)

    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(redux.publicGetAction());

    }, [])

    useDidMountEffect(() => {

        setSearchText("");
        setTags([]);
    }, [isPublic])

    useDidMountEffect(() => {

        setPage(1)

        if(isSearching){
            clearTimeout(isSearching)
        }

        setIsSearching(setTimeout(() =>{

            if(isPublic){
                dispatch(redux.publicGetAction(searchText, tags));
            }else{
                dispatch(redux.privateGetAction(searchText, tags));
            }

        }, 100))

    }, [searchText])

    useDidMountEffect(() => {

            setPage(1)

            if(isPublic){
                dispatch(redux.publicGetAction(searchText, tags));
            }else{
                dispatch(redux.privateGetAction(searchText, tags));
            }

    }, [tags])

    useDidMountEffect(() => {

        if(page > 1)
            dispatch(redux.loadMore(page, searchText, tags))

    }, [page])

    if(loading){
        return <Loading></Loading>
    }


    return (
        <AnimatePresence key="general_library" exitBeforeEnter>
            <div className="d-flex justify-content-between align-items-center">
                <PublicSelector name={name} isPublic={isPublic} setIsPublic={setIsPublic}></PublicSelector>
                <div className="d-flex align-items-center mt-4">
                    <SearchBar  placeholder={"busqueda"} text={searchText} setText={setSearchText} ></SearchBar>
                </div>
            </div>
            <TagList tags={tags} setTags={setTags} getTagsFunc={getTags}></TagList>
            <Container fluid>
                <Row className="mt-2 align-items-stretch">
                    
                    {
                        isPublic ?

                        <>
                            {
                            elements.length >  0 ?
                                elements.map((obj : any) => 
                                                Component(obj)
                            )
                            :
                            null
                            }
                            {
                                next?
                            <div className="w-100 pr-5 pl-5">
                                <LoadingButton onClick={() => setPage(page + 1)}></LoadingButton>
                            </div>
                            :
                            null
                            }
                        </>

                        :
                        <>
                        <LibraryAdd onClick={() => {setShow(true); onClick();}}></LibraryAdd>
                        {
                            privateElements.length >  0 ?
                                privateElements.map((obj : any) => 
                                                Component(obj)
                            )
                            :
                            null

                        }
                        </>
                    }
                    
                </Row>
            </Container>
            <VerticallyCenteredModal {...modal} size={"lg"} onHide={() => {setShow(false); modal.onHide()}}/>


        </AnimatePresence>
    )
}
