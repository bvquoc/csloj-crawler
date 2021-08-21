Sắp tới là ngày thi học kỳ I. Là học sinh ngoan, Hiếu không muốn vì đi muộn mà gặp trục trặc ở phòng thi nên đã chuẩn bị khá kỹ càng. Chỉ còn lại một công việc khá gay go là Hiếu không biết đi đường nào tới trường là nhanh nhất. Thường ngày Hiếu không quan tâm tới vấn đề này lắm cho nên bây giờ Hiếu không biết phải làm sao cả. Bản đồ thành phố gồm có ~N~ nút giao thông và ~M~ con đường nối các nút giao thông này. Có ~2~ loại con đường là đường ~1~ chiều và đường ~2~ chiều. Độ dài của mỗi con đường là một số nguyên dương. Nhà Hiếu ở nút giao thông ~1~ còn trường Chuyên Sơn La ở nút giao thông ~N~. Vì một lộ trình đường đi từ nhà Hiếu tới trường có thể gặp nhiều yếu tố khác như là đèn đỏ, đi qua công trường xây dựng, ... phải giảm tốc độ cho nên Hiếu muốn biết là có tất cả bao nhiêu lộ trình ngắn nhất đi từ nhà tới trường. Bạn hãy lập trình giúp Hiếu giải quyết bài toán khó này.

## Dữ liệu vào:
- Dòng thứ nhất ghi hai số nguyên ~N~ và ~M~;
- ~M~ dòng tiếp theo, mỗi dòng ghi bốn số nguyên dương ~K, U, V, L~. Trong đó ~K = 1~ có nghĩa là có đường đi một chiều từ ~U~ đến ~V~ với độ dài ~L~, ~K = 2~ có nghìa là có đường đi hai chiều giữa ~U~ và ~V~ với độ dài ~L~.

## Dữ liệu ra:
- Ghi hai số là độ dài đường đi ngắn nhấn và số lượng đường đi ngắn nhất. Biết rằng số lượng đường đi ngắn nhất không vượt quá ~2^{63} - 1~.

## Ví dụ:
#### Dữ liệu vào:
```
3 2
1 1 2 3
2 2 3 1
```

#### Dữ liệu ra:
```
4 1
```

## Giới hạn:
- ~1 ≤ N ≤ 5000; 1 ≤ M ≤ 20000~; Độ dài các con đường không vượt quá ~32000~.