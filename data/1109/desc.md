**<center>NGUỒN: VOI Training Camp 3H (Ngày 01/11/2016)</center>**

Hãng hàng không $ABC$ mở những chuyến bay kết nối $n$ thành phố $\left(1≤n≤20000\right)$. Cũng như tất cả các hãng hàng không khác, $k$ thành phố trong số $n$ thành phố trên được thiết kế như là trung tâm của hãng $\left(1≤k≤200, k≤n\right)$.

Hiện tại, hãng hàng không $ABC$ có $m$ tuyến bay một chiều $\left(1≤m≤20000\right)$, tuyến bay thứ $i$ bay từ thành phố $u_i$ đến thành phố $v_i$ và tốn $d_i$ USD $\left(1≤d_i≤10000\right)$. Có ít nhất một thành phố trong hai thành phố $u_i$ và $v_i$ là trung tâm của hãng. Ngoài ra giữa hai thành phố có không quá một tuyến bay trực tiếp (theo cả hai hướng) và không có tuyến bay nào có Thành phố xuất phát và kết thúc trùng nhau.

BT được giao vận hành bộ phận quản lý bán vé của hãng hàng không $ABC$. Thật không may,  khi anh ta mải mê chơi điện tử trong vài giờ đồng hồ, đã có $Q$ yêu cầu mua vé máy bay (một chiều) của hành khách $\left(1≤Q≤50000\right)$, trong đó yêu cầu thứ $i$ là mua vé cho một chuyến bay từ thành phố $a_i$ đến thành phố $b_i$.

BT choáng ngợp vì khối lượng công việc đồ sộ đến như vậy. Bạn hãy viết chương trình giúp anh ta tính xem mỗi yêu cầu như vậy có thể thực hiện được không và nếu thực hiện được thì giá tiền nhỏ nhất phải trả là bao nhiêu?

Để giảm thiểu kích thước của **dữ liệu ra**, bạn chỉ cần in ra tổng số yêu cầu có thể thực hiện được và tổng số giá tiền nhỏ nhất cho chúng. Để ý rằng con số này có thể vượt qua kiểu số nguyên $32$ bit.

## Dữ liệu vào:
- Dòng đầu tiên ghi $4$ số tự nhiên $n,m,k$ và $Q$
- $M$ dòng tiếp theo, dòng thứ $i$ ghi ba số $u_i,v_i,d_i$ $\left(1≤u_i,v_i≤n,u_i≠v_i\right)$
- $k$ dòng tiếp theo, mỗi dòng ghi mã của một trung tâm (trong giới hạn $1...n$)
- $Q$ dòng cuối cùng, dòng thứ $i$ ghi yêu cầu bay thứ $i$ là hai số nguyên $a_i,b_i$ $\left(1≤a_i,b_i≤n,a_i≠b_i\right)$

## Dữ liệu ra:
- Dòng đầu ghi tổng số lượng yêu cầu bay có thể đáp ứng được
- Dòng sau ghi tổng giá tiền nhỏ nhất của các yêu cầu bay đáp ứng được

## Ví dụ: 
#### Dữ liệu vào:
```
3 3 1 2
1 2 10
2 3 10
2 1 5
2
1 3
3 1
```

#### Dữ liệu ra:
```
1
20
```