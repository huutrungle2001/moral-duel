export interface Case {
  id: string;
  title: string;
  context: string;
  hashtags: string[];
  yesArgument: string;
  noArgument: string;
  yesVotes: number;
  noVotes: number;
  rewardPool: number;
  timeRemaining: string;
  topComments: Comment[];
  isTrending?: boolean;
}

export interface Comment {
  id: string;
  author: string;
  content: string;
  votes: number;
  side: "yes" | "no";
}

export const mockCases: Case[] = [
  {
    id: "1",
    title: "Cài định vị điện thoại người yêu?",
    context: "Bạn nghi ngờ người yêu không chung thủy và lén cài định vị để kiểm tra. Điều này có sai không?",
    hashtags: ["#Trending", "#Love"],
    yesArgument: "Tin tưởng là lý tưởng, xác minh là thực tế.",
    noArgument: "Tình yêu mất ý nghĩa khi quyền riêng tư biến mất.",
    yesVotes: 234,
    noVotes: 456,
    rewardPool: 1250,
    timeRemaining: "12h 34m",
    isTrending: true,
    topComments: [
      {
        id: "c1",
        author: "0xA1B2...C3D4",
        content: "Nếu không tin tưởng, thì đừng yêu. Định vị chỉ tạo thêm vết nứt.",
        votes: 89,
        side: "no"
      },
      {
        id: "c2",
        author: "0xE5F6...G7H8",
        content: "Đôi khi sự thật cần được xác minh. Nếu người ta vô tội, họ sẽ hiểu.",
        votes: 67,
        side: "yes"
      }
    ]
  },
  {
    id: "2",
    title: "Sa thải nhân viên lớn tuổi?",
    context: "Hiệu suất của ông A chỉ bằng 50% người trẻ, nhưng ông ấy tận tâm và sắp nghỉ hưu. Có nên sa thải không?",
    hashtags: ["#Workplace", "#Ethics"],
    yesArgument: "Công ty không thể vận hành bằng lòng trắc ẩn.",
    noArgument: "Giữ ông A lại thể hiện trách nhiệm xã hội.",
    yesVotes: 178,
    noVotes: 389,
    rewardPool: 980,
    timeRemaining: "8h 12m",
    isTrending: true,
    topComments: [
      {
        id: "c3",
        author: "0xI9J0...K1L2",
        content: "Kinh doanh là kinh doanh. Cảm xúc không trả lương nhân viên.",
        votes: 54,
        side: "yes"
      },
      {
        id: "c4",
        author: "0xM3N4...O5P6",
        content: "Ông ấy đã cống hiến nhiều năm. Đây là cơ hội cho công ty thể hiện nhân văn.",
        votes: 92,
        side: "no"
      }
    ]
  },
  {
    id: "3",
    title: "Tìm hiểu người mới khi ly thân?",
    context: "Bạn bắt đầu quen người mới khi vẫn chưa ly hôn.",
    hashtags: ["#Love", "#Ethics"],
    yesArgument: "Ly thân nghĩa là đã kết thúc.",
    noArgument: "Đó vẫn là cam kết đạo đức cho đến khi ly hôn hoàn tất.",
    yesVotes: 312,
    noVotes: 267,
    rewardPool: 1450,
    timeRemaining: "18h 45m",
    isTrending: false,
    topComments: [
      {
        id: "c5",
        author: "0xQ7R8...S9T0",
        content: "Ly thân đã là dấu chấm hết. Mọi người xứng đáng có hạnh phúc mới.",
        votes: 78,
        side: "yes"
      },
      {
        id: "c6",
        author: "0xU1V2...W3X4",
        content: "Giấy tờ chưa xong nghĩa là vẫn còn trách nhiệm. Hãy tôn trọng cam kết.",
        votes: 71,
        side: "no"
      }
    ]
  }
];

export const mockArguments = {
  "1": {
    yes: [
      {
        id: "a1",
        author: "0xY5Z6...A7B8",
        content: "Trong thời đại mà ngoại tình quá dễ dàng, việc xác minh là hợp lý. Nếu người yêu trong sạch, họ sẽ không ngại chia sẻ vị trí.",
        votes: 145,
        potentialReward: 75
      },
      {
        id: "a2",
        author: "0xC9D0...E1F2",
        content: "Đôi khi lòng tin cần được củng cố bằng bằng chứng. Định vị chỉ là công cụ, không phải tội lỗi.",
        votes: 98,
        potentialReward: 50
      },
      {
        id: "a3",
        author: "0xG3H4...I5J6",
        content: "Thà biết sự thật đau lòng còn hơn sống trong ảo tưởng mãi mãi.",
        votes: 67,
        potentialReward: 35
      }
    ],
    no: [
      {
        id: "a4",
        author: "0xK7L8...M9N0",
        content: "Tình yêu không thể xây dựng trên giám sát. Định vị là hành động phản bội lòng tin.",
        votes: 189,
        potentialReward: 95
      },
      {
        id: "a5",
        author: "0xO1P2...Q3R4",
        content: "Nếu bạn cần kiểm soát đối phương đến mức này, thì mối quan hệ đã chết từ lâu.",
        votes: 156,
        potentialReward: 80
      },
      {
        id: "a6",
        author: "0xS5T6...U7V8",
        content: "Quyền riêng tư là quyền cơ bản. Vi phạm nó là vi phạm đạo đức nghiêm trọng.",
        votes: 134,
        potentialReward: 65
      }
    ]
  },
  "2": {
    yes: [
      {
        id: "a7",
        author: "0xW9X0...Y1Z2",
        content: "Công ty cần tối ưu hiệu suất để cạnh tranh. Giữ nhân viên kém năng suất là không công bằng với đồng nghiệp.",
        votes: 112,
        potentialReward: 60
      },
      {
        id: "a8",
        author: "0xA3B4...C5D6",
        content: "Kinh doanh là về kết quả. Tình cảm không thể thay thế hiệu suất.",
        votes: 89,
        potentialReward: 45
      }
    ],
    no: [
      {
        id: "a9",
        author: "0xE7F8...G9H0",
        content: "Ông ấy đã cống hiến cả thanh xuân. Đây là lúc công ty đền đáp lòng trung thành.",
        votes: 201,
        potentialReward: 100
      },
      {
        id: "a10",
        author: "0xI1J2...K3L4",
        content: "Sa thải ông ấy sẽ gửi thông điệp tồi đến toàn bộ nhân viên: lòng trung thành không có giá trị.",
        votes: 178,
        potentialReward: 90
      }
    ]
  },
  "3": {
    yes: [
      {
        id: "a11",
        author: "0xM5N6...O7P8",
        content: "Ly thân là quyết định cuối cùng. Không ai nên phải đợi giấy tờ mới được sống tiếp.",
        votes: 167,
        potentialReward: 85
      }
    ],
    no: [
      {
        id: "a12",
        author: "0xQ9R0...S1T2",
        content: "Cam kết không chỉ là giấy tờ. Hãy tôn trọng người còn lại cho đến khi mọi thứ chính thức kết thúc.",
        votes: 143,
        potentialReward: 70
      }
    ]
  }
};
