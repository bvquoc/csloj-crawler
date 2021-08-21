**<center>NGUỒN: Contest CSL 2017-2018 Lần 2 (Tháng 1/2018) Day 1</center>**
<br>

Một đơn vị quân đội có ~n~ binh sỹ, đánh số từ ~1~ đến ~n~ ~(1 ≤ n ≤ 10^6)~. Để phù hợp với nhiệm vụ tác chiến của đơn vị, viên sỹ quan chỉ huy quyết định chia đơn vị thành từng phân đội.

Với mục đích đảm bảo hòa khí và giữ vững tinh thần đoàn kết nội bộ, mỗi phân đội sẽ bao gồm một số binh sỹ được đánh số liên tiếp nhau. Mỗi binh sỹ có một hiệu năng tác chiến, nếu ~x_i~ là hiệu năng tác chiến cá nhân của binh sỹ ~i~ ~(1 ≤ xi ≤ 100~, ~x_i~ nguyên), thì hiệu năng  tác chiến ~y~ của phân đội bao gồm các binh sỹ từ ~i~ đến ~i+k~ sẽ là ~\sum_{j=i}^{i+k}x_j~. Tuy nhiên kinh nghiệm chiến tranh cho thấy hiệu năng thực sự ~z~ của 
phân đội được xác định bởi hàm ~z =ay^2+by+c~, trong đó ~a, b~ và ~c~ là những hằng nguyên biết trước ~(-1 ≤ a ≤ -1, |b|, |c| ≤ 10^7)~. Còn hiệu năng chung của toàn đơn vị thì bằng tổng hiệu năng ~z~ của các phân đội. Rõ ràng rằng hiệu năng chung của đơn vị phụ thuộc vào cách xác định phân đội. **Ví dụ**, đơn vị có ~4~ người với các hiệu năng cá nhân tương ứng là ~(2, 2, 3, 4)~ và 
với ~a = -1, b = 10, c = -20~, thì việc chia thành ~3~ phân đội ~(1, 2), (3)~ và ~(4)~ sẽ cho hiệu năng chung là ~4 + 1 + 4 = 9~. Đó là hiệu năng cao nhất có thể đạt được.

**Yêu cầu**: Cho ~n, x_i\ ( i = 1 ÷ n), a, b, c~. Hãy xác định hiệu năng chung lớn nhất có thể đạt được. 

## Dữ liệu vào:
- Dòng đầu tiên chứa số nguyên ~n~;
- Dòng thứ hai chứa ba số nguyên ~a, b~ và ~c~; 
- Dòng thứba3 chứa ~n~ số nguyên ~x_1, x_2, . . ., x_n~. 

## Dữ liệu ra:
- Ghi ra một số nguyên là hiệu năng chung lớn nhất.

## Ví dụ:
#### Dữ liệu vào:
```
4 
-1 1 -20 
2 2 3 4
```
#### Dữ liệu ra:
```
9
```

## Giới hạn:
- Trong tất cả các test đều có: ~n ≤ 10^6, −5 ≤ a ≤ −1, |b| ≤ 10^7, |c|≤ 10^7; 1 ≤ x_i ≤ 100~. 
- ~20\%~ số test có ~n ≤ 1000~ 
- ~50\%~ số test khác có ~n ≤ 10000~