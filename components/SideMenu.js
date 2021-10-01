import { useState, useEffect } from 'react'
import styles from '../styles/SideMenu.module.css'
import Image from 'next/image'

export default function SideMenu () {
  const [deckList, setDeckList] = useState([])

  useEffect(() => {
    const loadAllDecks = async () => {
      // Getting all deck lists
      let list = ['Inglês', 'Japonês', 'Alemão']
      setDeckList(list)
    }
    
    loadAllDecks()
  }, [])

  return (
    <div className={styles.sideMenu}>
      <div className={styles.menuHeader}>
        <Image src="/flashee-icon.svg" alt="Flashee Logo" width={153} height={46} />
      </div>
      <div className={styles.menuItens}>
        <div className={styles.menuTitle}>Baralhos</div>
        {deckList.length > 0 ?
          deckList.map(DeckItem => {
            return (
              <div className={styles.deckItens}>{DeckItem}</div>
            )
          })
          :
          <div className={styles.placeholder}>Nenhum baralho criado</div>
        }
      </div>
    </div>
  )
}