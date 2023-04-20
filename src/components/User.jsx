export default function User({ user: { photoURL, displayName } }) {
  return (
    <div className="flex items-center text-xs shrink-0">
      <img
        className="w-8 h-8 mr-2 rounded-full"
        src={photoURL}
        alt={displayName}
        referrerPolicy="no-referrer-when-downgrade"
      />
      <span className="hidden md:block">{displayName}</span>
    </div>
  );
}
