import React, { useState } from 'react'
import FormBanner from '../images/fontaine-concept-art.jpg';
import ReactPlayer from 'react-player';

function CharacterForm({ characters, setCharacters }) {
  const [characterName, setCharacterName] = useState("");
  const [characterArtwork, setCharacterArtwork] = useState("");
  const [characterIcon, setCharacterIcon] = useState("");
  const [ItemIcon, setItemIcon] = useState("");
  const [sideBanner, setSideBanner] = useState("");
  const [showcase, setShowcase] = useState("");
  const [rarity, setRarity] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [title, setTitle] = useState("");
  const [nation, setNation] = useState("");
  const [vision, setVision] = useState("");
  const [visionIcon, setVisionIcon] = useState("");
  const [constellation, setConstellation] = useState("");
  const [constellationIcon, setConstellationIcon] = useState("");
  const [weaponName, setWeaponName] = useState("");
  const [weaponIcon, setWeaponIcon] = useState("");
  const [characterDescription, setCharacterDescription] = useState("");
  const [attackName, setAttackName] = useState("");
  const [attackDescription, setAttackDescription] = useState("");
  const [attackPreview, setAttackPreview] = useState("");
  const [attackIcon, setAttackIcon] = useState("");
  const [abilityName, setAbilityName] = useState("");
  const [abilityDescription, setAbilityDescription] = useState("");
  const [abilityPreview, setAbilityPreview] = useState("");
  const [abilityIcon, setAbilityIcon] = useState("");
  const [burstName, setBurstName] = useState("");
  const [burstDescription, setBurstDescription] = useState("");
  const [burstPreview, setBurstPreview] = useState("");
  const [burstIcon, setBurstIcon] = useState("");


  //=> Form State Handler Functions

  const handleCharacterName = (e) => setCharacterName(e.target.value);

  const handleCharacterArtwork = (e) => {
    if (!e.target.value.includes('https://')) {
      setErrorMessage("Artwork input field requires a URL");
      return;
    }
    setErrorMessage("");
    setCharacterArtwork(e.target.value);
  };

  const handleCharacterIcon = (e) => {
    if (!e.target.value.includes('https://')) {
      setErrorMessage("Character Icon input field requires a URL");
      return;
    }
    setErrorMessage("");
    setCharacterIcon(e.target.value);
  };

  const handleItemIcon = (e) => {
    if (!e.target.value.includes('https://')) {
      setErrorMessage("Item Icon input field requires a URL");
      return;
    }
    setErrorMessage("");
    setItemIcon(e.target.value);
  };

  const handleSideBanner = (e) => {
    if (!e.target.value.includes('https://')) {
      setErrorMessage("Side Banner input field requires a URL");
      return;
    }
    setErrorMessage("");
    setSideBanner(e.target.value);
  };

  const handleShowcase = (e) => {
    if (!e.target.value.includes('https://')) {
      setErrorMessage("Showcase input field requires a URL");
      return;
    }
    setErrorMessage("");
    setShowcase(e.target.value);
  };

  const handleRarity = (e) => setRarity(parseInt(e.target.value));
  const handleTitle = (e) => setTitle(e.target.value);
  const handleNation = (e) => setNation(e.target.value);

  const handleVision = (e) => {
    let visions = ["Pyro", "Cryo", "Hydro", "Anemo", "Electro", "Dendro", "Geo"]
    setVision(e.target.value);
    if (e.target.value === visions[0]) {
      setVisionIcon("https://static.wikia.nocookie.net/gensin-impact/images/2/2c/Element_Pyro.svg/");
    } else if (e.target.value === visions[1]) {
      setVisionIcon("https://static.wikia.nocookie.net/gensin-impact/images/7/72/Element_Cryo.svg/");
    } else if (e.target.value === visions[2]) {
      setVisionIcon("https://genshinimpact.wiki.fextralife.com/file/Genshin-Impact/hydro-element-genshin-impact-wiki-guide.png");
    } else if (e.target.value === visions[3]) {
      setVisionIcon("https://static.wikia.nocookie.net/gensin-impact/images/1/10/Element_Anemo.svg/");
    } else if (e.target.value === visions[4]) {
      setVisionIcon("https://static.wikia.nocookie.net/gensin-impact/images/f/ff/Element_Electro.svg/");
    } else if (e.target.value === visions[5]) {
      setVisionIcon("https://static.wikia.nocookie.net/gensin-impact/images/7/73/Element_Dendro.svg/");
    } else {
      setVisionIcon("https://static.wikia.nocookie.net/gensin-impact/images/9/9b/Element_Geo.svg/");
    }
  }

  const handleConstellation = (e) => setConstellation(e.target.value);

  const handleConstellationIcon = (e) => {
    if (!e.target.value.includes('https://')) {
      setErrorMessage("Constellation Icon input field requires a URL");
      return;
    }
    setErrorMessage("");
    setConstellationIcon(e.target.value)
  };

  const handleWeaponName = (e) => setWeaponName(e.target.value);

  const handleWeaponIcon = (e) => {
    if (!e.target.value.includes('https://')) {
      setErrorMessage("Weapon Icon input field requires a URL");
      return;
    }
    setErrorMessage("");
    setWeaponIcon(e.target.value)
  };

  const handleCharacterDescription = (e) => setCharacterDescription(e.target.value);
  const handleAttackName = (e) => setAttackName(e.target.value);
  const handleAttackDescription = (e) => setAttackDescription(e.target.value);

  const handleAttackPreview = (e) => {
    if (!e.target.value.includes('https://', 'gif')) {
      setErrorMessage("Normal Attack Preview input field requires a GIF Image");
      return;
    }
    setErrorMessage("");
    setAttackPreview(e.target.value)
  }

  const handleAttackIcon = (e) => {
    if (!e.target.value.includes('https://')) {
      setErrorMessage("Normal Attack Icon input field requires a URL");
      return;
    }
    setErrorMessage("");
    setAttackIcon(e.target.value);
  }

  const handleAbilityName = (e) => setAbilityName(e.target.value);
  const handleAbilityDescription = (e) => setAbilityDescription(e.target.value);

  const handleAbilityPreview = (e) => {
    if (!e.target.value.includes('https://', 'gif')) {
      setErrorMessage("Elemental Ability Preview input field requires a GIF Image");
      return;
    }
    setErrorMessage("");
    setAbilityPreview(e.target.value)
  }

  const handleAbilityIcon = (e) => {
    if (!e.target.value.includes('https://')) {
      setErrorMessage("Elemental Ability Icon input field requires a URL");
      return;
    }
    setErrorMessage("");
    setAbilityIcon(e.target.value);
  }

  const handleBurstName = (e) => setBurstName(e.target.value);
  const handleBurstDescription = (e) => setBurstDescription(e.target.value);

  const handleBurstPreview = (e) => {
    if (!e.target.value.includes('https://', 'gif')) {
      setErrorMessage("Elemental Burst Preview input field requires a GIF Image");
      return;
    }
    setErrorMessage("");
    setBurstPreview(e.target.value);
  }

  const handleBurstIcon = (e) => {
    if (!e.target.value.includes('https://')) {
      setErrorMessage("Elemental Burst Icon input field requires a URL");
      return;
    }
    setErrorMessage("");
    setBurstIcon(e.target.value);
  }

  //=> Form Submission Handler Function

  function handleNewCharacterSubmit(e) {
    e.preventDefault();
    let maxID = Math.max(...characters.map(character => character.id))

    const newCharacterData = {
      id: maxID + 1,
      name: characterName,
      artwork: characterArtwork,
      icon: characterIcon,
      cardIcon: ItemIcon,
      sideBanner: sideBanner,
      showcase: showcase,
      rarity: rarity,
      title: title,
      nation: nation,
      vision: vision,
      visionIcon: visionIcon,
      constellation: constellation,
      constellationIcon: constellationIcon,
      weapon: [
        {
          icon: weaponIcon,
          signature: weaponName
        }
      ],
      description: characterDescription,
      talents: [
        {
          name: attackName,
          type: "Normal Attack",
          description: attackDescription,
          preview: attackPreview,
          talentIcon: attackIcon
        },
        {
          name: abilityName,
          type: "Elemental Skill",
          description: abilityDescription,
          preview: abilityPreview,
          talentIcon: abilityIcon
        },
        {
          name: burstName,
          type: "Elemental Burst",
          description: burstDescription,
          preview: burstPreview,
          talentIcon: burstIcon
        }
      ]
    }

    fetch(`${process.env.REACT_APP_API_URL}/cats`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCharacterData),
    })
      .then((res) => res.json())
      .then((newCharacter) => handleAddNewCharacter(newCharacter))

    setCharacterName("");
    setCharacterArtwork("");
    setCharacterIcon("");
    setItemIcon("");
    setSideBanner("");
    setShowcase("");
    setRarity("");
    setTitle("");
    setNation("");
    setVision("");
    setVisionIcon("");
    setConstellation("");
    setConstellationIcon("");
    setWeaponName("");
    setWeaponIcon("");
    setCharacterDescription("");
    setAttackName("");
    setAttackDescription("");
    setAttackPreview("");
    setAttackIcon("");
    setAbilityName("");
    setAbilityDescription("");
    setAbilityPreview("");
    setAbilityIcon("");
    setBurstName("");
    setBurstDescription("");
    setBurstPreview("");
    setBurstIcon("");
  }

  const handleAddNewCharacter = (newCharacter) => {
    setCharacters([...characters, newCharacter]);
  }

  //=> Character Form

  return (
    <div className='character-form-page'>
      <div id="form-banner-image">
        <img className="form-banner-image" src={FormBanner} alt="form-banner" />
      </div>
      <div className='bottom-banner-border'></div>
      <div>
        <form className='character-form' onSubmit={handleNewCharacterSubmit}>
          <h1 className='form-title'>New Character Form</h1>
          <label className='form-label' htmlFor='charactar-name'>Character Name: </label>
          <input
            type='text'
            id='character-name'
            value={characterName}
            onChange={handleCharacterName}>
          </input>
          <div>
            <label className='form-label' htmlFor='charactar-artwork'>Character Artwork: </label>
            <input
              type='text'
              id='character-artwork'
              value={characterArtwork}
              onChange={handleCharacterArtwork}>
            </input>
            <div>
              <img
                className={`form-image ${!characterArtwork ? 'hidden' : ''}`}
                src={characterArtwork}
                alt='character-artwork'
              />
            </div>
          </div>
          <div>
            <label className='form-label' htmlFor='charactar-icon'>Character Icon: </label>
            <input
              type='text'
              id='character-icon'
              value={characterIcon}
              onChange={handleCharacterIcon}>
            </input>
            <div>
              <img
                className={`form-image ${!characterIcon ? 'hidden' : ''}`}
                src={characterIcon}
                alt='character-icon'
              />
            </div>
          </div>
          <div>
            <label className='form-label' htmlFor='charactar-item-icon'>Item Icon: </label>
            <input
              type='text'
              id='character-item-icon'
              value={ItemIcon}
              onChange={handleItemIcon}>
            </input>
            <div>
              <img
                className={`form-image ${!ItemIcon ? 'hidden' : ''}`}
                src={ItemIcon}
                alt='character-item-icon'
              />
            </div>
          </div>
          <div>
            <label className='form-label' htmlFor='charactar-side-banner'>Side Banner Image: </label>
            <input
              type='text'
              id='character-side-banner'
              value={sideBanner}
              onChange={handleSideBanner}>
            </input>
            <div>
              <img
                className={`form-image ${!sideBanner ? 'hidden' : ''}`}
                src={sideBanner}
                alt='character-side-banner'
              />
            </div>
          </div>
          <div>
            <label className='form-label' htmlFor='charactar-showcase'>Showcase Video: </label>
            <input
              type='text'
              id='character-showcase'
              value={showcase}
              onChange={handleShowcase}>
            </input>
            <ReactPlayer
              url={showcase}
              height='202.5px'
              width='360px'
              controls='true'
            />
          </div>
          <div>
            <label className='form-label' htmlFor='character-rarity'>Rarity: </label>
            <select value={rarity} onChange={handleRarity}>
              <option disabled value="">Choose a Rarity</option>
              <option value='4'>4 Star</option>
              <option value='5'>5 Star</option>
            </select>
          </div>
          <div>
            <label className='form-label' htmlFor='charactar-title'>Character Title: </label>
            <input
              type='text'
              id='character-title'
              value={title}
              onChange={handleTitle}>
            </input>
          </div>
          <div>
            <label className='form-label' htmlFor='charactar-nation'>Nation: </label>
            <input
              type='text'
              id='character-nation'
              value={nation}
              onChange={handleNation}>
            </input>
          </div>
          <div>
            <label className='form-label' htmlFor='character-vision'>Vision: </label>
            <select value={vision} onChange={handleVision}>
              <option disabled value="">Choose a Vision</option>
              <option value='Pyro'>Pyro</option>
              <option value='Cryo'>Cryo</option>
              <option value='Electro'>Electro</option>
              <option value='Anemo'>Anemo</option>
              <option value='Hydro'>Hydro</option>
              <option value='Geo'>Geo</option>
              <option value='Dendro'>Dendro</option>
            </select>
          </div>
          <div>
            <label className='form-label' htmlFor='charactar-constellation'>Constellation: </label>
            <input
              type='text'
              id='character-constellation'
              value={constellation}
              onChange={handleConstellation}>
            </input>
          </div>
          <div>
            <label className='form-label' htmlFor='charactar-constellation-icon'>Constellation Icon: </label>
            <input
              type='text'
              id='character-constellation-icon'
              value={constellationIcon}
              onChange={handleConstellationIcon}>
            </input>
            <div>
              <img
                className={`form-image ${!constellationIcon ? 'hidden' : ''}`}
                src={constellationIcon}
                alt='character-constellation-icon'
              />
            </div>
          </div>
          <div>
            <label className='form-label' htmlFor='weapon-name'>Signature Weapon: </label>
            <input
              type='text'
              id='weapon-name'
              value={weaponName}
              onChange={handleWeaponName}>
            </input>
          </div>
          <div>
            <label className='form-label' htmlFor='weapon-icon'>Weapon Icon: </label>
            <input
              type='text'
              id='weapon-icon'
              value={weaponIcon}
              onChange={handleWeaponIcon}>
            </input>
            <div>
              <img
                className={`form-image ${!weaponIcon ? 'hidden' : ''}`}
                src={weaponIcon}
                alt='weapon-icon'
              />
            </div>
          </div>
          <div>
            <label className='form-label' htmlFor='character-description'>Character Description: </label>
            <textarea
              type='text'
              id='character-description'
              value={characterDescription}
              onChange={handleCharacterDescription}
              maxLength="250">
            </textarea>
          </div>
          <div className='talent-section'>
            <h1 className='talent-header'>Talents</h1>
            <div className='talent'>
              <h2>Normal Attack</h2>
              <div>
                <label className='form-label' htmlFor='normal-attack-name'>Normal Attack Name: </label>
                <input
                  type='text'
                  id='normal-attack-name'
                  value={attackName}
                  onChange={handleAttackName}>
                </input>
              </div>
              <div>
                <label className='form-label' htmlFor='normal-attack-description'>Normal Attack Description: </label>
                <textarea
                  type='text'
                  id='normal-attack-description'
                  value={attackDescription}
                  onChange={handleAttackDescription}
                  maxLength="250">
                </textarea>
              </div>
              <div>
                <label className='form-label' htmlFor='normal-attack-preview'>Normal Attack Preview: </label>
                <input
                  type='text'
                  id='normal-attack-preview'
                  value={attackPreview}
                  onChange={handleAttackPreview}>
                </input>
                <div>
                  <img
                    className={`form-image ${!attackPreview ? 'hidden' : ''}`}
                    src={attackPreview}
                    alt='normal-attack-preview'
                  />
                </div>
              </div>
              <div>
                <label className='form-label' htmlFor='normal-attack-icon'>Normal Attack Icon: </label>
                <input
                  type='text'
                  id='normal-attack-icon'
                  value={attackIcon}
                  onChange={handleAttackIcon}>
                </input>
                <div>
                  <img
                    className={`form-image ${!attackIcon ? 'hidden' : ''}`}
                    src={attackIcon}
                    alt='normal-attack-icon'
                  />
                </div>
              </div>
            </div>
            <div className='talent'>
              <h2>Elemental Ability</h2>
              <div>
                <label className='form-label' htmlFor='ability-name'>Elemental Ability Name: </label>
                <input
                  type='text'
                  id='ability-name'
                  value={abilityName}
                  onChange={handleAbilityName}>
                </input>
              </div>
              <div>
                <label className='form-label' htmlFor='ability-description'>Elemental Ability Description: </label>
                <textarea
                  type='text'
                  id='ability-description'
                  value={abilityDescription}
                  onChange={handleAbilityDescription}
                  maxLength="250">
                </textarea>
              </div>
              <div>
                <label className='form-label' htmlFor='ability-preview'>Elemental Ability Preview: </label>
                <input
                  type='text'
                  id='ability-preview'
                  value={abilityPreview}
                  onChange={handleAbilityPreview}>
                </input>
                <div>
                  <img
                    className={`form-image ${!abilityPreview ? 'hidden' : ''}`}
                    src={abilityPreview}
                    alt='ability-preview'
                  />
                </div>
              </div>
              <div>
                <label className='form-label' htmlFor='ability-icon'>Elemental Ability Icon: </label>
                <input
                  type='text'
                  id='ability-icon'
                  value={abilityIcon}
                  onChange={handleAbilityIcon}>
                </input>
                <div>
                  <img
                    className={`form-image ${!abilityIcon ? 'hidden' : ''}`}
                    src={abilityIcon}
                    alt='ability-icon'
                  />
                </div>
              </div>
            </div>
            <div className='talent'>
              <h2>Elemental Burst</h2>
              <div>
                <label className='form-label' htmlFor='burst-name'>Elemental Burst Name: </label>
                <input
                  type='text'
                  id='burst-name'
                  value={burstName}
                  onChange={handleBurstName}>
                </input>
              </div>
              <div>
                <label className='form-label' htmlFor='burst-description'>Elemental Burst Description: </label>
                <textarea
                  type='text'
                  id='burst-description'
                  value={burstDescription}
                  onChange={handleBurstDescription}
                  maxLength="250">
                </textarea>
              </div>
              <div>
                <label className='form-label' htmlFor='burst-preview'>Elemental Burst Preview: </label>
                <input
                  type='text'
                  id='burst-preview'
                  value={burstPreview}
                  onChange={handleBurstPreview}>
                </input>
                <div>
                  <img
                    className={`form-image ${!burstPreview ? 'hidden' : ''}`}
                    src={burstPreview}
                    alt='burst-preview'
                  />
                </div>
              </div>
              <div>
                <label className='form-label' htmlFor='burst-icon'>Elemental Burst Icon: </label>
                <input
                  type='text'
                  id='burst-icon'
                  value={burstIcon}
                  onChange={handleBurstIcon}>
                </input>
                <div>
                  <img
                    className={`form-image ${!burstIcon ? 'hidden' : ''}`}
                    src={burstIcon}
                    alt='burst-icon'
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <button type='submit'>Submit New Character Data</button>
            {errorMessage && <p>{errorMessage}</p>}
          </div>
        </form>
      </div>
    </div>
  )
}

export default CharacterForm

//This component is a form for adding new characters to the website upon their release in the game!