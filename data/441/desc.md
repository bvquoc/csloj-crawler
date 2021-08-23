Xâu ký tự $X$ được gọi là xâu con của xâu ký tự $Y$ nếu ta có thể xoá đi một số ký tự trong xâu $Y$ để được xâu $X$.
Một xâu được gọi là đối xứng (palindrome) nếu như khi đọc xâu này từ phải sang trái cũng thu được xâu ban đầu.

**Bài toán:** Cho một xâu ký tự $S$ (chỉ gồm các ký tự chữ cái latin) hãy tìm một xâu con đối xứng dài nhất của xâu $S$.

## Dữ liệu vào:
- Một dòng duy nhất chứa xâu $S$.

## Dữ liệu ra:
- Mộ dòng duy nhất là xâu con đối xứng dài nhất của $S$. Nếu có nhiều kết quả, chỉ cần in ra một kết quả bất kỳ.

## Ví dụ:
### Dữ liệu vào:
```
lmevxeyzl
```

### Dữ liệu ra:
```
level
```

## Giới hạn:
- Độ dài xâu $S$ không quá $2000$ ký tự.