**<center>NGUỒN: PreVNOI Ⅶ Lần 2 (ONLINE 2017)</center>**
<br>

Tí và Tèo là những chuyên gia đánh máy, có khả năng gõ với tốc độ không ai so sánh được. Vì vậy, hai bạn thường hay rủ nhau ganh đua, tìm ra ai là người đánh máy nhanh hơn. Một hôm, Tí và Tèo lại rủ nhau thi gõ văn bản. Thi thấy vậy, liền nghĩ ra một trò chơi mới, rủ Tí và Tèo tham gia. Trò chơi như sau:
- Ban đầu, Thi sẽ đọc cho Tí và Tèo một xâu $S$.
- Sau đó là $N$ lượt chơi. Mỗi lượt chơi, Thi sẽ đọc lên $3$ con số $a$, $b$ và $c$, nhiệm vụ của Tí và Tèo là chép các kí tự nằm giữa $2$ vị trí $a$ và $b$ sang vị trí $c$. Ở đây, vị trí $x$ được định nghĩa là khoảng trống ngay sau $x$ kí tự. Ví dụ, trong xâu **abdbe** thì **db** thuộc khoảng $2..4$. Để đảm bảo xâu không quá dài, sau mỗi lượt chơi, các kí tự ở sau vị trí $M$, nếu có, sẽ bị xóa đi.
- Sau $N$ lượt chơi, ai là người đầu tiên tìm được $K$ kí tự đầu tiên của xâu là người thắng cuộc.

Bạn, một tay anh hùng bàn phím cự phách, muốn hoàn thành trò chơi này trước cả Tí và Tèo! Hãy viết chương trình hoàn thành trò chơi này!
## Dữ liệu vào:
- Dòng đầu tiên gồm hai số $K$ và $M$.
- Dòng tiếp theo gồm xâu $S$.
- Dòng tiếp theo gồm số $N$.
- N dòng tiếp theo, mỗi dòng gồm 3 số a, b và c thể hiện một lượt chơi.

## Dữ liệu ra:
- Một dòng duy nhất chứa $K$ kí tự là các kí tự đầu tiên của xâu sau các lượt chơi.

## Giới hạn:
- $1 ≤ K ≤ 200$; $1 ≤ M ≤ 10^9$; $1 ≤ |S| ≤ 200000$, $1 ≤ N ≤ 200000$;
- $0 ≤ a < b ≤ \text{độ dài xâu }S\text{ sau lượt chơi thứ }i$;
- $0 ≤ c ≤ \text{độ dài xâu }S\text{ sau lượt chơi thứ }i$;
- Trong $\frac{3}{7}$ số test có $N ≤ 2000$ và $M ≤ 2000$.

## Ví dụ
### Dữ liệu vào:
```
2 18
copypaste
4
3 6 8
1 5 2
4 12 1
17 18 0
```

### Dữ liệu ra:
```
ac
```

### Dữ liệu vào:
```
6 100
vvooii
3
5 6 2
4 6 1
1 2 3
```

### Dữ liệu ra:
```
voiovi
```