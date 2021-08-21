**<center>NGUỒN: Bài tập thầy Lê Minh Hoàng ôn Hải Phòng T10/2016</center>**

Cho một cây gồm ~𝑛~ đỉnh đánh số từ ~1~ tới ~𝑛~. Ba con vật nuôi: Chó, mèo và chuột đứng ở ba đỉnh khác nhau. Chó biết rằng mèo đôi lúc hay bắt nạt chuột và khi đó mèo sẽ di chuyển theo các cạnh trên cây tới nơi chuột đứng. Chó muốn ngăn cản mèo bắt chuột bằng cách di chuyển tới một đỉnh nào đó trên đường đi từ vị trí của mèo tới vị trí của chuột, tuy nhiên do quá béo và lười nên chó muốn chọn đỉnh gần nhất để đi tới.

**Yêu cầu:** Trả lời ~𝑚~ truy vấn, mỗi truy vấn cho bởi ba số nguyên hoàn toàn phân biệt ~𝑎, 𝑏, 𝑐~ lần lượt là vị trí của chó, mèo và chuột. Hãy cho biết vị trí của chó cần đi tới

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên dương ~𝑛, 𝑚\ (3 ≤ 𝑛 ≤ 10^5; 𝑚 ≤ 10^5)~;
- ~𝑛 − 1~ dòng tiếp theo, mỗi dòng chứa hai số nguyên dương ~𝑢, 𝑣~ ứng với một cạnh ~(𝑢, 𝑣)~ trên cây;
- ~𝑚~ dòng tiếp theo, mỗi dòng chứa ba số nguyên hoàn toàn phân biệt ~𝑎, 𝑏, 𝑐~ ứng với một bộ vị trí của chó, mèo và chuột.

#### Dữ liệu ra:
- Ghi ra ~𝑚~ dòng, mỗi dòng ghi số hiệu đỉnh là câu trả lời cho một truy vấn.

## Ví dụ:
<center><img src="/images/problems/1419/PEACE.svg" width="200px" /></center>

#### Dữ liệu vào:
```
6 4
1 2
1 3
3 4
3 5
5 6
1 2 3
5 2 4
6 2 5
6 3 4
```

#### Dữ liệu ra:
```
1
3
5
3
```
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)