**<center>NGUỒN: Bài tập thầy Hiếu ôn Hải Phòng T11/2020</center>**

Vinh chuẩn bị đi thi Olympic Tin học thành phố. Sau khi xếp vào túi mọi giấy tờ cần thiết Vinh vào Internet tra cứu đường đi. Thật thú vị khi trên đường đi có một công viên. Bản đồ chỉ rõ công viên được chia thành các ô vuông kích thước ~𝒉 × 𝒘~, mỗi ô có thể được trồng cỏ và có đường đi qua, có thể đó là ô có đặt phù điêu, có cây to hoặc là ô có bồn hoa, những ô này dĩ nhiên không có đường đi. Trên bản đồ có một đánh dấu ~𝑬~ chỉ lối vào và ô đánh dấu ~𝑿~ chỉ lối ra. Các ô này không 
nhất thiết nằm ở biên (được dẫn vào hay ra bằng đường ngầm). Một hàng rào bao quanh công viên (trừ lối vào/ra nếu có).

Vinh tính ra rằng để đi qua hết một ô cần ~1~ giây và nếu đi theo đường ngắn nhất từ lối vào đến lối ra thì dự trữ thời gian vẫn còn ~2~ giây! Không thể lãng phí thời gian, Vinh quyết định dạo chơi thêm ~2~ giây trong công viên và di chuyển liên tục, từ một ô có thể tiến lên phía trước, rẽ trái, phải hoặc quay lui.

Hãy xác định số lượng đường đi khác nhau có thể thực hiện và đưa ra kết quả theo mô đun ~10^9+7~. Hai đường đi gọi là khác nhau nếu chứa ô mới không có trong đường đi kia hoặc chứa ô đi lặp lại khác nhau.

## Dữ liệu vào:
- Dòng đầu tiên chứa hai số nguyên ~𝒉~ và ~𝒘\ (1 ≤ 𝒉, 𝒘 ≤ 500)~;
- Mỗi dòng trong ~𝒉~ dòng sau chứa xâu độ dài ~𝒘~ xác định một dòng của bản đồ công viên, các ký tự trong xâu thuộc tập ~\{𝑬, 𝑿, . , \#\}~, trong đó ký tự `. ` chỉ ô có đường đi, ký tự `#` chỉ ô không đi qua được. Chỉ có đúng một ô `𝑬` và một ô `𝑿`.

## Dữ liệu ra:
- Ghi ra một số nguyên duy nhất là kết quả tìm được. Nếu không tồn tại đường đi từ ~𝑬~ đến ~𝑿~ thì đưa ra số ~0~.

## Ví dụ:
#### Dữ liệu vào:
```
6 9
.........
..######X
..#......
.E..####.
..##...#.
.....#...
```

#### Dữ liệu ra:
```
15
```
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)