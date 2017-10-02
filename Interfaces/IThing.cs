namespace keepr
{
    public interface IThing
    {
        int Id { get; set; }
        string Title { get; set; }
        string Description { get; set; }
        string ImgUrl { get; set; }

        string UserId { get; set; }
    }
}