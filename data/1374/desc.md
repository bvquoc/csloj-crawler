**<center>NGUỒN: Bài tập thầy Hiếu ôn Hải Phòng T11/2020</center>**

Hôm nay, sau khi ngủ dạy, Bờm quyết định nghê nhạc. Anh bạt danh sách chứa các bài mình yêu thích, và sử dụng chức nang shuffle của phần mềm nghe nhạc để giữ cho các bài hát xuát hiện một cách ngẫu nhiên.

Chức năng shuffle sễ thực hiện như sau: Giả sử danh sách các bài hát của Bờm gồm ~𝑛~ bài, được đánh số từ ~1~ đến ~n~. Trước khi phát nhạc, chức năng shuffle sẽ sinh hoán vị ngẫu nhiên của tập ~1. . 𝑛~ và phát các bài hát theo thứ tự của hoán vị đó cho đến khi tát cả các bài hát đã được phát. Sau đố nó shuffle lại và bắt đầu chạy lại danh sách theo hoán vị mới sinh.

**Ví dụ:** Danh sách của Bờm có ~6~ bài hát ~(1, 2, 3, 4, 5, 6)~. Lần ~1~, phần mềm sẽ phát lần lượt theo ~1~ thứ tự là hoán vị ngẫu nhiên của tập ~1..6~ (ví dụ: ~1, 6, 5, 2, 4, 3~). Khi tất cả các bài đã được phát theo đúng thứ tự đó, chức năng shuffle sẽ sinh ~1~ hoán vị ngẫu nhiên khác (ví dụ: ~4, 5, 1, 2, 6, 3~) và lại phát theo thứ tự này. Như vậy, các bài hát mà Bờm sẽ nghe lần lượt là: ~1, 6, 5, 2, 4, 3, 4, 5, 1, 2, 6, 3~… và cứ tiếp tục  như vậy.

Bạn được cung cấp một lịch sử gồm ~𝑚~ bài hát đã được phát trong buổi sáng (theo đúng thứ tự mà Bờm đã nghe. Tuy nhiên, lịch sử này lại chưa hoàn chỉnh, bởi vì anh ta bắt đàu viết lại lịch sử các bài hát tại một thời điểm bất kỳ trong buổi sáng hôm đó (một số bài hát có thể đã được chơi rồi, rồi anh ta mới bát đầu viết lại).

**Yêu cầu:** Từ bản lịch sử này, bạn cần xác định có bao nhiêu điểm khác nhau có thể sẽ là thời điểm mà phần mềm shuffle danh sách các bài hát. Một vị trí có thể là một thời điểm bắt đầu shuffle nếu nó chia dãy history thành các đọan độ dài ~𝑛~ (số bài hát trông list) với đọan đầu và đoạn cuối cố thể ít hơn ~𝑛~ bài và không cố khoảng nào chứa một bài hát xuát hiện tới ~2~ lần.

## Dữ liệu vào:
- Dòng đàu ghi hai số ~𝑛, 𝑚\ (0 < 𝑛, 𝑚 ≤ 10^6)~ là số lượng ca khúc trong danh sách và độ dài của lịch sử mà Bờm đã nghe trong buổi sáng đó.
- Dòng thứ hai ghi ~𝑚~ số trong lịch sử các bài mà Bờm đã nghe.

## Dữ liệu ra:
- Ghi ra một số duy nhất là số thời điểm khác nhau cố thể là thời điểm shuffle danh sách này.

## Ví dụ:
#### Dữ liệu vào:
```
6 6
6 5 4 3 2 1
```

#### Dữ liệu ra:
```
6
```

#### Dữ liệu vào:
```
3 5
3 3 1 1 1
```

#### Dữ liệu vào:
```
0
```

#### Dữ liệu vào:
```
4 10
3 4 4 1 3 2 1 2 3 4
```

#### Dữ liệu ra:
```
1
```

#### Giải thích:
- Test đầu: có ~6~ vị trí cố thể là thời điểm bắt đầu:
    - ~(6\ 5\ 4\ 3\ 2\ 1)~,
    - ~(..6) (5\ 4\ 3\ 2\ 1..)~,
    - ~(..6\ 5)(4\ 3\ 2\ 1..)~,
    - ~(..6\ 5\ 4)(3\ 2\ 1…)~,
    - ~(..6\ 5\ 4\ 3 )(2\ 1…)~,
    - ~(..6\ 5\ 4\ 3\ 2)(1…)~.

## Giới hạn:
- Subtask ~\#1: 30\%~ test có ~1 ≤ 𝑚 ≤ 5000~;
- Subtask ~\#2: 70\%~ test không có ràng buộc gì thêm.