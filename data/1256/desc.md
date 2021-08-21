**<center>NGUỒN: CONTEST LÀO CAI Lần 2 2017</center>**

Tại của hàng pizza của Mr. Hải Dương có một điểm khác biệt với các cửa hàng khác, nếu tại của hàng bình thường thì khách hàng đến trước sẽ được phục vụ trước, khách hàng đến sau sẽ được phục vụ sau thì ở của hàng Pizza của Mr. Hải Dương sẽ phục vụ theo tiêu chí thời gian đợi trung bình của khách hàng là nhỏ nhất, vì vậy Anh ta sẽ quyết định phục vụ khách hàng nào trước chứ không phụ thuộc vào khách đến sớm hay muộn.
Mỗi loại bánh pizza khác nhau thì cần một khoảng thời gian khác nhau để làm bánh. Vì chỉ có một lò nướng bánh nên trong thời gian nướng một chiếc bánh pizza này thì Anh ta không thể nướng thêm chiếc bánh nào khác.

**Ví dụ**: Nếu cửa hàng có $3$ khách đến vào các thời điểm $t_1=0,t_2=1\text{ và }t_3=2$ và yêu cầu $3$ chiếc bánh pizza có thời gian làm bánh là $l_1=3,l_2=9,l_3=6$. Nếu theo tiêu chí khách đến trước được phục vụ trước thì thời gian chờ đợi của ba khách hàng lần lượt là $q_1=3,q_2=11,q_3=16$. Như vậy thời gian chờ trung bình là $(3+11+16)/3=10$. Đây không phải là phương án tối ưu theo tiêu chí thời gian chờ trung bình nhỏ nhất. Mr. Hải Dương sẽ lựa chọn phục vụ theo thứ tự là khách $1$, khách $3$ và sau đó mới là khách $2$. Khi đó thời gian chờ của ba khách lần lượt là $q_1=3,q_2=17,q_3=7$. Như vậy thời gian chờ trung bình là $(3+17+7)/3=9$.

**Yêu cầu**: Bạn hãy giúp Mr. Hải Dương tính thời gian chờ trung bình nhỏ nhất. Chỉ cần in ra phần nguyên của thời gian chờ trung bình nhỏ nhất.

**Ghi chú**: 
- Thời gian chờ của một khách hàng là độ chênh lệch giữa hai thời điểm: thời điểm khách hàng đến cửa hàng và thời điểm khách hàng rời cửa hàng;
- Mr. Hải Dương không biết trước các yêu cầu của khách hàng, tức là đến thời điểm $t_i$, khi khách hàng $i$ tới cửa hàng thì Mr. Hải Dương mới biết khách hàng $i$ yêu cầu bánh pizza làm trong thời gian $l_i$.

## Dữ liệu vào:
- Dòng đầu tiên chứa số nguyên dương $n\ (1≤n≤10^5 )$ là số khách hàng;
- $n$ dòng tiếp theo, dòng thứ $i$ chứa hai số nguyên dương $t_i,l_i\  (0≤t_i≤10^9,1≤l_i≤10^9)$ mô tả khách hàng $i$ đến của hàng vào thời điểm $t_i$ và chiếc bánh khách hàng $i$ cần sẽ mất thời gian làm bánh là $l_i$.
Các số trên một dòng được ghi cách nhau bởi dấu cách.

## Dữ liệu ra:
- Ghi ra một số nguyên duy nhất là phần nguyên của thời gian chờ trung bình nhỏ nhất.

## Ví dụ:
#### Dữ liệu vào:
```
3
0 3
1 9
2 5
```

#### Dữ liệu ra:
```
8
```

#### Giải thích:
- Thứ tự phục vụ là khách hàng $1$, khách hàng $3$ và khách hàng $2$. 
Thời gian chờ trung bình nhỏ nhất là: $(3+16+6)/3=25/3=8,33$

#### Dữ liệu vào:
```
4
0 3
20 1
1 9
2 6
```

#### Dữ liệu ra:
```
7
```

#### Giải thích:
- Thứ tự phục vụ là khách hàng $1$, khách hàng $4$, khách hàng $3$ và khách hàng $2$. Thời gian chờ trung bình nhỏ nhất là: $(3+1+17+7)/4=28/4=7$.