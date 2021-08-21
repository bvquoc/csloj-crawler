<!--
**<center>NGUỒN: Hội thảo Duyên Hải 2016 - Lê Thanh Bình</center>**
-->

Có ~𝑛~ thị trấn ở thành phố Byteotia. Một vài thị trấn được nối với nhau bằng các con đường trực tiếp hai chiều. Những con đường này không cắt nhau ở bên ngoài các thị trấn. Mỗi cặp thị trấn được nối với nhau bằng nhiều nhất một con đường trực tiếp. Bạn có thể từ một thị trấn này đến một thị trấn khác bằng một con đường trực tiếp hoặc thông qua một vài con đường trung gian (đường đi).

Mỗi thị trấn có chính xác một cư dân và vì lý do này mà các cư dân cảm thấy cô đơn. Do vậy mỗi cư dân đều đi đến nhà các cư dân khác để thăm hỏi. Dễ thấy rằng có tất cả ~𝑛 × (𝑛 − 1)~ cuộc thăm hỏi diễn ra.

Trên đất nước này thường diễn ra các cuộc biểu tình của những người lập trình. Họ yêu cầu mọi người sử dụng máy tính phải trả tiền cho những phần mềm được viết ra. Khi một cuộc biểu tình diễn ra ở một thị trấn thì mọi ngả đường vào/ra khỏi thị trấn này đều bị phong tỏa. Điều này dẫn đến hậu quả là một số cuộc viếng thăm sẽ không được diễn ra.

Bạn được chính phủ thuê để xác định thiệt hai của mỗi cuộc biểu tình nếu nó diễn ra ở một thị trấn nào đó. Thiệt hại được đo bằng số cặp thị trấn không đến thăm được nhau nếu cuộc biểu tình xảy ra.

## Dữ liệu vào:
- Dòng đầu tiên ghi hai số nguyên ~𝑛, 𝑚~ lần lượt là số lượng thị trấn và số con đường hai chiều nối trực tiếp giữa các thị trấn. ~(1 ≤ 𝑛 ≤ 10^5; 1 ≤ 𝑚 ≤ 5×10^5)~.

- ~𝑚~ dòng tiếp theo, mỗi dòng ghi hai số ~𝑎, 𝑏~ thể hiện một con đường hai chiều nối giữa thị trấn ~𝑎~ và thị trấn ~𝑏~. ~(1 ≤ 𝑎, 𝑏 ≤ 𝑛; 𝑎 ≠ 𝑏)~.

## Dữ liệu ra:
- Ghi ra trên ~n~ dòng, mỗi dòng một số, số ở dòng thứ ~𝑖~ thể hiện số cặp thị trấn mà họ không thể đến thăm được nhau nếu cuộc biểu tình diễn ra ở thành phố ~𝑖~.

## Ví dụ:
#### Dữ liệu vào:
```
5 5
1 2
2 3
1 3
3 4
4 5
```

#### Dữ liệu ra:
```
8
8
16
14
8
```
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)