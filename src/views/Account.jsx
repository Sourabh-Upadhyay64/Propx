import { useLocation } from 'react-router-dom'

export default function Account(){
  const { state } = useLocation()
  const profile = state?.profile || {name:'Marry Doe', email:'marry@gmail.com'}

  return (
    <div>
      <div className="header">
        <h2 className="h2">Account Settings</h2>
      </div>
      <div style={{padding:'16px 0'}}>
        <div className="profile">
          <div className="avatar" style={{position:'relative'}}>
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=240&q=80&auto=format&fit=crop" alt="avatar"/>
            <div className="badge">✚</div>
          </div>
          <div>
            <div style={{fontWeight:700}}>{profile.name || 'Marry Doe'}</div>
            <div className="p" style={{margin:0, textTransform:'capitalize'}}>{profile.email || 'marry@gmail.com'}</div>
          </div>
        </div>
        <p className="p" style={{marginTop:16}}>Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam</p>
      </div>
    </div>
  )
}