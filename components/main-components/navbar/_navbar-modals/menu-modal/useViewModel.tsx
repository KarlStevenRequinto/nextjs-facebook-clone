const useViewModel = () => {
    const menuProfessionalItems = [
        {
            title: "Ads Manager",
            description: "Create, manage and track the performance of your ads.",
            imgSource: "/images/ads-manager.png",
            imgWidth: 36,
            imgHeight: 36,
        },
        {
            title: "Meta Business Suite",
            description: "A better way to manage your business across Facebook and Instagram, all in one place",
            imgSource: "/images/meta-business-suite.png",
            imgWidth: 48,
            imgHeight: 48,
        },
        {
            title: "Professional Dashboard",
            description: "Get insights, create ads and explore management tools to help reach your audience.",
            imgSource: "/images/pro-dashboard.png",
            imgWidth: 48,
            imgHeight: 48,
        },
        {
            title: "Ad Center",
            description: "Manage all the ads you create in Pages, with streamlined features.",
            imgSource: "/images/ad-center.png",
            imgWidth: 36,
            imgHeight: 36,
        },
    ];
    return menuProfessionalItems;
};

export default useViewModel;
