Bạn là một tài xế xe tải, bạn đang cần chở hàng từ nhà kho tới khu sản xuất. Địa hình khu vực có hình chữ nhật gồm ~M×N~ đồi núi khác nhau, với ô ~(i, j)~ có độ cao là ~A_{ij}~ mét. Bạn đang ở ô ~(1, 1)~ và muốn đưa xe tải tới đích là ô ~(M, N)~. Bạn chỉ được phép di chuyển sang các ô kề cạnh, và không được di chuyển lên trên (nghĩa là chỉ được phép di chuyển sang trái, sang phải hoặc xuống dưới). Khi đi từ một ô này sang ô khác, cũng có nghĩa bạn di chuyển từ vùng núi này sang vùng núi khác, nếu đường đi là dốc xuống hoặc bằng phẳng, xe của bạn mất lượng xăng là ~10~ lít. Khi đi lên dốc, bạn phải mất thêm ~4~ lít xăng cho từng ~100~ mét độ chênh lệch của ~2~ khu vực cho từng tấn trọng tải của xe. 

Ví dụ, xe đang có trọng tải ~26010~ kg, di chuyển từ độ cao ~400~m tới độ cao ~700~m thì lượng nhiên liệu mất đi là ~10 + 3 \times 4 \times 26 = 322~ (lượng tấn được làm tròn lấy phần nguyên). Sau đó, xe tải sẽ có trọng tải là ~25688~ kg.

Bạn được phép đổ bớt xăng trước khi di chuyển từ vị trí này sang vị trí khác. Ví dụ trong trường hợp trên, bạn đổ đi ~11~ lít trước khi di chuyển, thì lượng xăng còn lại là ~25999~, do đó lượng xăng mất đi là ~10 + 3 \times 4 \times 25 = 310~, và sau đó xe tải có trọng tải là ~25689~ kg.

Ban đầu xe tải có trọng tải là ~8~ tấn và có ~25000~ lít xăng (~1~ lít xăng là ~1~kg). Chú ý độ cao của đồi núi là số nguyên chia hết cho ~100~ và trong đoạn từ ~0~ tới ~4000~.

Nhiệm vụ của bạn là đưa xe tải tới đích với số lượng xăng phải tiêu thụ là ít nhất. 

## Dữ liệu vào:
- Dòng đầu tiên chứa hai số nguyên dương ~M~ và ~N\ (N,M≤1000)~;
- ~M~ dòng sau, mỗi dòng gồm ~N~ số là số nguyên thể hiện độ cao của các khu vực tương ứng.

## Dữ liệu ra:
- Lượng xăng còn lại nhiều nhất có thể sau khi tới đích, hoặc in ra ~-1~ nếu xe không thể tới nơi.

## Ví dụ:
#### Dữ liệu vào:
```
4 4
100 200 100 0
400 300 100 200
200 300 500 500
400 400 300 600
```

#### Dữ liệu ra:
```
24299
```

## Giới hạn:
- ~50\%~ có ~M,N≤200~.