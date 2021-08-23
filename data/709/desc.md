Cho một chiếc cân hai đĩa và các quả cân có khối lượng $3^0, 3^1, 3^2,…$ (các quả cân tương ứng được đánh số $0, 1, 2, …$, có không quá $210$ quả cân, mỗi loại có duy nhất một quả). Hãy chọn các quả cân để có thể cân được vật có khối lượng $N\ (N≤10^{100})$.

**Ví dụ:** Để cân vật có khối lượng $N=11$ ta cần sử dụng các quả cân sau:
- Đĩa cân bên trái: quả cân $3^1$ và $3^2$;
- Đĩa cân bên phải: quả cân $3^0$ và vật $N=11$.

## Dữ liệu vào:
- Một dòng duy nhất chứa số nguyên dương $N$.

## Dữ liệu ra:
Ghi ra hai dòng, mỗi dòng có định dạng sau:
- Số đầu là $k$ là số lượng quả cân;
- Nếu $k > 0$ thì $k$ số tiếp theo là chỉ số các quả cân.

Dòng đầu cho đĩa cân bên trái, dòng sau cho đĩa cân bên phải, vật cần cân đặt ở đĩa cân bên phải.

## Ví dụ:
### Dữ liệu vào:
```
11
```

### Dữ liệu ra:
```
2 1 2
1 0
```