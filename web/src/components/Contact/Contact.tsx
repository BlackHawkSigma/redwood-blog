type ContactProps = {
  contact: {
    name: string
    message: string
    /** Date */
    createdAt: string
  }
}

const Contact = ({ contact }: ContactProps) => {
  return (
    <div>
      <h3>{contact.name}</h3>
      <p>{contact.message}</p>
      <small>
        erstellt: {new Date(contact.createdAt).toLocaleString('de-DE')}
      </small>
    </div>
  )
}

export default Contact
